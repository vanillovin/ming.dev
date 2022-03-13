import Head from 'next/head';

const Title = ({ title, description }: { title: string, description: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <p>{description}</p>
    </Head>
  )
} 

export default Title