import Link from "next/link";

const RecentPosts = ({ posts }) => {
  return (
    <section className={`mt-10`}>
      <h1 className={`text-3xl font-extrabold dark:text-gray-300`}>최근 게시물</h1>
      <hr className='border-t-1 border-solid mt-5 dark:border-gray-600'/>
      <div className={`flex flex-col`}>
        {posts.slice(0, 5).map(post => (
            <Link
              key={post._id}
              href={`/${post._raw.flattenedPath}`}
              passHref
            >
              <a className="mt-5">
                <div className={`dark:text-gray-300 font-semibold text-xl`}>{post.title}</div>
                <div className={`dark:text-gray-500 font-light`}>{post.description}</div>
              </a>
            </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;