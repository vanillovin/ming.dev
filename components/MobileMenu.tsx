import cn from 'classnames';
import navlinks from 'data/navlinks';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const MobileMenu = () => {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button
        className={'visible md:hidden w-8 h-8 flex items-center mx-1'}
        aria-label="Toggle menu"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
        <Image
          alt={`menu-${theme}`}
          width={30}
          height={30}
          src={`/static/menu-${theme}.png`}
        />
      </button>
      {isMenuOpen && (
        <div
          id="dropdown"
          className="absolute top-14 right-0 z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
        >
          <ul className="py-1" aria-labelledby="dropdownButton">
            {navlinks.map(nav => (
              <li key={nav.title} onClick={() => setIsMenuOpen(false)}>
                <Link href={nav.link}>
                  <a
                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    {nav.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default MobileMenu


