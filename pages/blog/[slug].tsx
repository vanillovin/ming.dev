import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

import Container from "components/Container";
import { allBlogs } from 'contentlayer/generated';

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
        <h1 className="text-gray-700 text-3xl dark:text-gray-300 mb-4">{post.title}</h1>
        <p className="text-gray-700 dark:text-gray-300 mt-0 text-sm">{post.date.substring(0, 10)}</p>
        <MDXComponent />
      </div>
    </Container>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allBlogs.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const post = allBlogs.find(p => p.slug === params.slug)
  return {
    props: {
      post,
    },
  }
}

export default Post;