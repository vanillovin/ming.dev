import { InferGetStaticPropsType } from 'next';

import Container from '../components/Container';
import { allNotes } from 'contentlayer/generated';
import metadata from 'data/metadata';
import Title from 'components/Title';
import Search from 'components/Search';

const Note = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const customMeta = {
    title: `Note - ${metadata.meta.title}`,
  };
  return (
    <Container customMeta={customMeta}>
      <Title title="Note" description="공부한 기술들을 정리하는 곳" />
      <Search type="note" posts={posts} />
    </Container>
  );
};

export const getStaticProps = async () => {
  const posts = allNotes.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );

  return {
    props: {
      posts,
    },
  };
};

export default Note;
