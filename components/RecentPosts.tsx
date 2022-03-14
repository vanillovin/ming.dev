import Link from "next/link";

const RecentPosts = ({ posts }) => {
  console.log('RecentPosts posts', posts);
  
  return (
    <section className={`mt-10`}>
      <h1 className={`text-3xl font-extrabold`}>최근 게시물</h1>
      <hr className='border-t-1 border-solid mt-5'/>
      <div className={`flex flex-col`}>
        {posts.slice(0, 5).map(post => (
          <>
            <Link
              key={post._id}
              href={`/blog/${post._raw.flattenedPath}`}
              passHref
            >
              <a className="mt-5">
                <div className={`dark:text-gray-200 font-semibold text-xl`}>{post.title}</div>
                <div className={`dark:text-gray-400 font-light`}>{post.description}</div>
              </a>
            </Link>
          </>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;