import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Nav from './Nav';
// import Footer from './Footer';
import metadata from '../data/metadata';
import ThemeChanger from './ThemeChanger';

const Container = (props) => {
  const router = useRouter();
  const meta = {
    title: metadata.meta.title,
    description: metadata.description,
    author: metadata.author,
    ...props.customMeta,
  };

  return (
    <div className={`w-full flex flex-col items-center p-3`}>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>
      <header
        className={`relative w-full max-w-3xl flex flex-row justify-between items-center my-1 select-none`}
      >
        <div
          className={`flex flex-row items-center align-middle cursor-pointer`}
        >
          <Image
            src={`/static/logo-light.jpg`}
            alt="로고"
            width={40}
            height={40}
            objectFit={`cover`}
            className={`rounded-full`}
            onClick={() => router.push('/')}
          />
          <ThemeChanger />
        </div>
        <Nav />
      </header>
      <main className={`w-full max-w-3xl`}>
        {props.children}
        {/* <Footer /> */}
      </main>
    </div>
  );
};

export default Container;
