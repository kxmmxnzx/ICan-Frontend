'use client';

import {
  faCalendar,
  faFontAwesome,
  faGear,
  faHouse,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { MouseEvent, useState } from 'react';
import Icon from '../icon/Icon';
import cn from '@/utils/cn';
import NavGoalMobile from './navGoal/NavGoalMobile';

export default function NavbarMobile() {
  const [showGoals, setShowGoals] = useState<boolean>(false);
  const pathname = usePathname();

  const clickTabs = () => {
    if (showGoals) setShowGoals(false);
  };

  const clickGoals = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setShowGoals((prev) => !prev);
  };

  return (
    <>
      <nav
        role="button"
        className="z-30 grid h-16 w-full grid-cols-5 gap-2 bg-gs00 px-2 shadow-[0_-4px_8px_-4px_rgba(0,0,0,0.1)] md:hidden"
        onClick={clickTabs}
      >
        <Link className="flex items-center justify-center" href="/">
          <Icon
            className={cn('h-12 w-full min-w-12', {
              'rounded-xl bg-slate50 text-slate700': pathname === '/',
            })}
            icon={faHouse}
          />
        </Link>
        <Link
          className="flex items-center justify-center"
          href="/todoCalendar"
          key="투두캘린더"
        >
          <Icon
            className={cn('h-12 w-full min-w-12', {
              'rounded-xl bg-slate50 text-slate700':
                pathname === '/todoCalendar',
            })}
            icon={faCalendar}
          />
        </Link>
        <button
          type="button"
          className="flex items-center justify-center"
          onClick={clickGoals}
        >
          <Icon
            className={cn('h-12 w-full min-w-12', {
              'rounded-xl bg-slate50 text-slate700':
                pathname.startsWith('/goals'),
            })}
            icon={faFontAwesome}
          />
        </button>
        <Link href="/settings" className="flex items-center justify-center">
          <Icon
            className={cn('h-12 w-full min-w-12', {
              'rounded-xl bg-slate50 text-slate700': pathname === '/settings',
            })}
            icon={faGear}
          />
        </Link>
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => signOut()}
        >
          <Icon icon={faRightFromBracket} />
        </button>
      </nav>
      <NavGoalMobile isOpen={showGoals} closeHandler={clickTabs} />
    </>
  );
}
