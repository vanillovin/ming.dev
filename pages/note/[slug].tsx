import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

import Container from "components/Container";
import { allNotes } from 'contentlayer/generated';

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code);
  const customMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
  };

  return (
    <Container customMeta={customMeta}>
      <div className="mt-10 prose w-full max-w-3xl">
        <span className="block font-bold text-gray-700 text-3xl dark:text-gray-300">
          {post.title}
        </span>
        <span className="block text-gray-700 dark:text-gray-300 text-sm -mt-6">
          {post.date.substring(0, 10)}
        </span>
        <MDXComponent />
      </div>
    </Container>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allNotes.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = allNotes.find(p => p.slug === params.slug)
  return {
    props: {
      post,
    },
  }
}

export default Post;