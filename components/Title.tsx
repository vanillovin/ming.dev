import { useTheme } from 'next-themes';
import Image from 'next/image';

const Title = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const { theme = 'light' } = useTheme();
  return (
    <>
      <div className={`my-2 md:my-8 flex items-end justify-between`}>
        <span
          className={`
          font-extrabold text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 
          to-yellow-600 dark:from-violet-400 dark:to-purple-600 animate-fade-in 
        `}
        >
          {title}
        </span>
        <div>
          <span className="text-xs md:text-base">{description}</span>
          <Image
            alt={`em-${theme}`}
            src={`/static/em-${theme === 'dark' ? 'light' : 'dark'}.png`}
            width="20"
            height="20"
          />
        </div>
      </div>
      <hr className="border-t-1 border-solid dark:border-gray-600 my-4" />
    </>
  );
};

export default Title;
