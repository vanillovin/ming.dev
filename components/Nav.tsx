import cn from 'classnames';
import NextLink from "next/link";
import { useRouter } from 'next/router';
import { useState } from 'react';

import navlinks from "../data/navlinks";
import MobileMenu from './MobileMenu';

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-amber-400 dark:text-violet-400'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 hover:text-amber-200 dark:hover:text-violet-200 transition-all'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

const Nav = () => {  
  return (
    <nav className="relative">
      <MobileMenu />
      {navlinks.map(nav => (
        <NavItem key={nav.title} href={nav.link} text={nav.title} />
      ))}
    </nav>
  );
};

export default Nav;