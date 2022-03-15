import Image from 'next/image';
import { InferGetStaticPropsType } from "next";
import { useTheme } from 'next-themes';

import metadata from '../data/metadata';
import Container from "../components/Container";
import RecentPosts from '../components/RecentPosts';
import { allBlogs, allNotes } from 'contentlayer/generated';

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { theme } = useTheme();

  return (
    <Container>
      <div className={`my-5 w-full select-none`}>
        <div className={`relative`}>
          <Image
            src={`/home/${theme==='light' ? 'light': 'dark'}.jpg`}
            alt="대표 이미지"
            width={`100%`}
            height={35}
            layout={`responsive`}
            objectFit="cover"
            className={`absolute top-0 left-0 rounded-3xl`}
          />
          <span
            className={`absolute top-0 font-extrabold italic text-white md:text-6xl 
                        text-center w-full h-full drop-shadow-lg pt-20`}
          >
            {metadata.title}
          </span>
          <span className={`absolute top-0 font-extrabold text-white md:text-2xl 
                            w-full h-full text-center drop-shadow-lg pt-40`}
          >{metadata.description}</span>
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