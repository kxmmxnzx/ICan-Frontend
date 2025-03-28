import cn from '@/utils/cn';

interface Props {
  date: string;
  progress: number;
}

export default function TodoGrassCell({ date, progress }: Props) {
  const currentYear = `${new Date().getFullYear()}`;

  const getCellColor = () => {
    switch (Math.floor(progress / 20)) {
      case 0:
        return progress === 0 ? 'bg-gs100' : 'bg-slate100';
      case 1:
        return 'bg-slate200';
      case 2:
        return 'bg-slate300';
      case 3:
        return 'bg-slate400';
      case 4:
        return 'bg-slate500';
      default:
        return 'bg-slate700';
    }
  };

  return (
    <li
      className={cn(`size-4 flex-none rounded-[4px] ${getCellColor()}`, {
        invisible: currentYear !== date.slice(0, 4),
      })}
    />
  );
}
