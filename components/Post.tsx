import Link from "next/link";

const Post = ({ type, date, title, des, slug }) => {
  return (
    <Link href={`${type}/${slug}`} passHref>
      <a className="w-full my-5 hover:translate-x-1.5 transition-all">
        <div className="font-medium text-xs text-gray-400">
          {new Date(date).toLocaleString('ko-kr', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
        <div className={`dark:text-gray-200 font-extrabold text-xl mt-2`}>{title}</div>
        <div className={`text-gray-400 font-medium mt-1`}>{des}</div>
      </a>
    </Link>
  );
};

export default Post;