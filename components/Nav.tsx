import navlinks from "../data/navlinks";
import Link from "next/link";
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  console.log('Nav router', router.pathname);
  
  return (
    <nav>
      {navlinks.map((nav) => (
        <Link href={nav.link} key={nav.title}>
          <a
            className={`
              mr-5 transition-all
              ${router.pathname !== nav.link && 'hover:text-violet-200'} 
              ${router.pathname === nav.link && 'font-bold text-violet-400'}
            `}
          >
            {nav.title}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Nav;