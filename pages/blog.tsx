import { InferGetStaticPropsType } from "next";

import Container from "../components/Container";
import { allBlogs } from 'contentlayer/generated';
import metadata from 'data/metadata';
import Title from 'components/Title';
import Search from 'components/Search';

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const customMeta = {
    title: `Blog - ${metadata.meta.title}`,
  };

  return (
    <Container customMeta={customMeta}>
      <Title title='Blog' description='개발 및 기술들 공유하는 곳' />
      <Search type='blog' posts={posts}/>
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allBlogs.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};

export default Blog;