import BlogPost from "../components/BlogPost";
import Container from "../components/Container";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import metadata from 'data/metadata';

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const customMeta = {
    title: `Blog - ${metadata.meta.title}`,
  };
  return (
    <Container customMeta={customMeta}>
      <div className={`mt-10 flex flex-col`}>
        {posts.map((post) => (
          <BlogPost
            date={post.date}
            title={post.title}
            des={post.description}
            slug={post._raw.flattenedPath}
            key={post._id}
          />
        ))}
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};

export default Blog;