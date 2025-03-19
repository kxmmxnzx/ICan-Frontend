import Link from 'next/link';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import cn from '@/utils/cn';
import Icon from '@/components/common/icon/Icon';

type Props = {
  icon: IconProp;
  path: string;
  title: string;
  isSelected: boolean;
};

export default function NavTabItem({ icon, path, title, isSelected }: Props) {
  return (
    <Link
      href={path}
      className={cn(
        'flex flex-shrink-0 items-center gap-1 overflow-hidden whitespace-nowrap rounded-lg px-1 py-2 text-gs600',
        'hover:bg-gs100 2xl:gap-2 2xl:rounded-xl 2xl:px-2 2xl:py-3',
        { 'bg-slate50 text-slate700': isSelected },
      )}
    >
      <Icon
        icon={icon}
        className="w-10 px-4 transition-all duration-300 2xl:p-2"
      />
      <p className="text-14M font-medium 2xl:text-16M">{title}</p>
    </Link>
  );
}
