import Image from 'next/image';
import { InferGetStaticPropsType } from 'next';
import { useTheme } from 'next-themes';

import metadata from '../data/metadata';
import Container from '../components/Container';
import RecentPosts from '../components/RecentPosts';
import { allBlogs, allNotes } from 'contentlayer/generated';

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { theme = 'light' } = useTheme();

  return (
    <Container>
      <div className={`my-5 w-full select-none`}>
        <div className={`relative`}>
          <Image
            src={`/home/${theme}.jpg`}
            alt="대표 이미지"
            width={`100%`}
            height={35}
            layout={`responsive`}
            objectFit="cover"
            className={`absolute top-0 left-0 rounded-3xl`}
            priority
          />
          <div
            className={`absolute top-0 left-0 w-full h-full flex flex-col items-center align-middle justify-center`}
          >
            <span
              className={`block font-extrabold italic text-white text-3xl md:text-6xl drop-shadow-lg`}
            >
              {metadata.title}
            </span>
            <span
              className={`
              block font-extrabold text-white text-sm md:text-2xl text-center drop-shadow-lg md:mt-4`}
            >
              {metadata.description}
            </span>
          </div>
        </div>

        <RecentPosts posts={posts} />
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const allPosts = [...allBlogs, ...allNotes];
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
};

export default Home;
