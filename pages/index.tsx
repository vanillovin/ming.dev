import Image from 'next/image';
import { InferGetStaticPropsType } from "next";
import { useTheme } from 'next-themes';

import metadata from '../data/metadata';
import Container from "../components/Container";
import RecentPosts from '../components/RecentPosts';
import { allPosts } from "contentlayer/generated";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { theme } = useTheme();

  return (
    <Container>
      <div className={`my-5 w-full`}>
        <div className={`relative`}>
          <Image
            src={`/home/${theme==='light' ? 'main': 'dark'}.jpg`}
            alt="대표 이미지"
            width={`100%`}
            height={40}
            layout={`responsive`}
            objectFit="cover"
            className={`rounded-3xl`}
          />
          <span
            className={`absolute top-14 font-extrabold italic text-white md:text-8xl text-center w-full drop-shadow-lg`}
          >
            {metadata.title}
          </span>
          <span className={`absolute bottom-20  font-extrabold text-white md:text-2xl w-full text-center drop-shadow-lg`}>{metadata.description}</span>
        </div>

        <RecentPosts posts={posts} />
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

export default Home;