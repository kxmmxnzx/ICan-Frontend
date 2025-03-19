import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons/faRightFromBracket';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import cn from '@/utils/cn';
import Icon from '@/components/common/icon/Icon';

export default function NavUserSetting() {
  return (
    <div className="flex flex-col items-start overflow-hidden rounded-2xl bg-gs50 px-1 text-gs500 2xl:px-2">
      <Link
        href="/settings"
        className={cn(
          'flex w-full items-center gap-1 overflow-hidden whitespace-nowrap rounded-lg py-2 text-gs600',
          'border-b border-gs200 2xl:gap-2 2xl:rounded-xl 2xl:py-3',
        )}
      >
        <Icon
          icon={faGear}
          className="w-10 p-3 transition-all duration-300 2xl:p-2"
        />
        <p className="text-14M font-medium 2xl:text-16M">설정</p>
      </Link>
      <button
        onClick={() => signOut()}
        type="button"
        className={cn(
          'flex w-full items-center gap-1 overflow-hidden whitespace-nowrap rounded-lg py-2 text-gs600',
          '2xl:gap-2 2xl:rounded-xl 2xl:py-3',
        )}
      >
        <Icon
          icon={faRightFromBracket}
          className="w-10 p-3 transition-all duration-300 2xl:p-2"
        />
        <p className="text-14M font-medium 2xl:text-16M">로그아웃</p>
      </button>
    </div>
  );
}
