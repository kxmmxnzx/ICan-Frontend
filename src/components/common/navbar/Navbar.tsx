'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import Link from 'next/link';
import cn from '@/utils/cn';
import NavUserProfile from './NavUserProfile';
import NavTab from './NavTab';
import { useNavbar } from '../NavbarContext';
import IcanLogo from '../IcanLogo';
import IcanTitle from '../IcanTitle';

export default function Navbar() {
  const { isFolded, toggleNavbar } = useNavbar();

  return (
    <nav
      className={cn(
        'hidden h-full flex-none flex-col items-start bg-gs00 px-2 py-4 transition-all duration-300 first-line:left-0 md:relative md:flex',
        {
          'w-16': isFolded,
          'w-64': !isFolded,
        },
      )}
    >
      <button
        className={cn(
          'absolute right-0 top-20 z-10 flex h-10 w-5 items-center justify-center rounded-l-md bg-slate50',
        )}
        type="button"
        onClick={toggleNavbar}
      >
        <FontAwesomeIcon
          className={cn('h-3 w-3 transition-transform duration-300', {
            'rotate-0 overflow-y-hidden': isFolded,
            'rotate-180': !isFolded,
          })}
          icon={faAngleRight}
          size="2xs"
        />
      </button>
      <Link
        href="/"
        className="flex h-9 items-center gap-2 rounded-lg p-[3px] text-18SB"
      >
        <IcanLogo
          className={cn(
            'mx-2 size-6 flex-none transition-transform duration-500',
            {
              'rotate-90': isFolded,
            },
          )}
        />
        <IcanTitle
          className={cn('h-5 w-16 transition-transform duration-300', {
            invisible: isFolded,
          })}
        />
      </Link>
      <NavUserProfile />
      <NavTab />
    </nav>
  );
}
