import navlinks from "../data/navlinks";
import Link from "next/link";
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  
  return (
    <nav>
      {navlinks.map((nav) => (
        <Link href={nav.link} key={nav.title}>
          <a
            className={`
              mr-5 transition-all
              ${router.pathname !== nav.link && 'hover:text-amber-200'} 
              ${router.pathname === nav.link && 'font-bold text-amber-400'}
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