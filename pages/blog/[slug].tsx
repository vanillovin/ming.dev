import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

import Container from "components/Container";
import { allPosts } from "contentlayer/generated";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code);
  const customMeta = {
    title: post.title,
    description: post.description,
    date: new Date(post.date).toISOString(),
  };

  return (
    <Container customMeta={customMeta}>
      {/* prose className을 주면 tailwindcss 플러그인 typography 사용가능 */}
      {/* 커스텀도 가능함. 미량님 깃허브 참고 */}
      <div className="mt-10 prose">
        <h1 className="text-gray-700 text-3xl dark:text-gray-300 mb-2">{post.title}</h1>
        <p className="text-gray-700 dark:text-gray-300 mt-0 text-sm">{post.date.substring(0, 10)}</p>
        <MDXComponent />
      </div>
    </Container>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p._raw.flattenedPath } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return {
    props: {
      post,
    },
  };
};

export default Post;