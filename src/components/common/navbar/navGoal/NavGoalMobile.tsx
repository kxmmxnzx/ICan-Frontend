import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useGoals } from '@/hooks/useGoals';
import { Goal } from '@/types/goals';
import cn from '@/utils/cn';

const GOAL_BG_COLORS = {
  goal01: 'bg-goal01',
  goal02: 'bg-goal02',
  goal03: 'bg-goal03',
  goal04: 'bg-goal04',
  goal05: 'bg-goal05',
  default: 'bg-slate500',
} as const;

interface Props {
  isOpen: boolean;
  closeHandler: () => void;
}

export default function NavGoalMobile({ isOpen, closeHandler }: Props) {
  const { data: goalList, isFetching } = useGoals();
  const pathname = usePathname();

  return (
    <>
      <div
        className={`fixed bottom-16 h-dvh w-full bg-gsBk md:hidden ${isOpen ? 'scale-y-100 opacity-10' : 'scale-y-0'}`}
        onClick={closeHandler}
      />
      <div
        className={`fixed bottom-16 flex max-h-[10.5rem] w-full origin-bottom flex-col gap-2 overflow-x-hidden overflow-y-scroll rounded-t-xl bg-gs00 p-2 transition-transform duration-500 ease-in-out md:hidden ${isOpen ? 'scale-y-100' : 'scale-y-0'}`}
      >
        {isFetching &&
          !goalList &&
          Array.from({ length: 4 }, (_, i) => i + 1).map((e) => (
            <div
              key={e}
              className="my-1 flex h-6 w-full animate-pulse rounded-md bg-gs100"
            />
          ))}
        {goalList &&
          goalList?.map((goal: Goal) => (
            <Link
              onClick={(e) => {
                e.stopPropagation();
                closeHandler();
              }}
              href={`/goals/${goal.goalId}`}
              className={cn(
                'flex flex-none cursor-pointer items-center gap-4 overflow-hidden rounded-md p-2',
                'text-gray-400 hover:bg-gs50',
                {
                  'bg-gs50 text-gsBk': pathname.startsWith(
                    `/goals/${goal.goalId}`,
                  ),
                },
              )}
              key={goal.goalId}
            >
              <span
                className={`ml-2 size-2 flex-none rounded-md ${GOAL_BG_COLORS[goal.color]}`}
              />
              <span className="text-overflow h-4 text-12R 2xl:h-5 2xl:text-14R">
                {goal.title}
              </span>
            </Link>
          ))}
      </div>
    </>
  );
}
