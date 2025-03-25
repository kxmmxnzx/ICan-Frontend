'use client';

import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';
import { usePathname } from 'next/navigation';
import NavTabItem from './NavTabItem';
import NavGoal from './navGoal/NavGoal';
import NavUserSetting from './NavUserSetting';

const tabs = [
  { icon: faHouse, title: '대시보드', path: '/' },
  { icon: faCalendar, title: '투두캘린더', path: '/todoCalendar' },
];

export default function NavTab() {
  const pathname = usePathname();

  return (
    <div className="flex w-full flex-1 flex-col gap-2 overflow-y-hidden border-t border-gs200 py-4">
      <section className="flex flex-none flex-col gap-2">
        {tabs.map((tab) => (
          <NavTabItem
            icon={tab.icon}
            title={tab.title}
            path={tab.path}
            isSelected={pathname === tab.path}
            key={tab.path}
          />
        ))}
      </section>
      <section className="flex-1 overflow-hidden">
        <NavGoal />
      </section>
      <section className="flex-none">
        <NavUserSetting />
      </section>
    </div>
  );
}
