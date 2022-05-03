import Link from 'next/link';

const Post = ({ type, date, title, des, slug }) => {
  return (
    <Link href={`${type}/${slug}`} passHref>
      <a className="w-full my-2 md:my-5 hover:translate-x-1.5 transition-all">
        <div className="dark:text-gray-200 font-extrabold text-lg md:text-xl mt-2">
          {title}
        </div>
        <div className="text-gray-400 my-1 text-sm md:text-base">{des}</div>
        <div className="font-light text-xs text-gray-400">
          {new Date(date).toLocaleString('ko-kr', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      </a>
    </Link>
  );
};

export default Post;
