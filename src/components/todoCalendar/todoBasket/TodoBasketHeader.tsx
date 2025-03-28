import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { useClickOutside } from '@/hooks/useClickOutside';
import IconButton from '@/components/common/button/IconButton';

interface Props {
  basketLength: number;
  onDelete: () => void;
}

export default function TodoBasketHeader({ basketLength, onDelete }: Props) {
  const [tooltipRef, showTooltip, setShowTooltip] =
    useClickOutside<HTMLDivElement>();

  return (
    <div className="flex w-full items-center gap-1">
      <h1 className="text-16SB text-gsBk 2xl:text-18SB">할일 장바구니</h1>
      <div className="relative">
        <IconButton
          icon={faCircleQuestion}
          className="relative size-5 text-gs500"
          onClick={() => setShowTooltip(true)}
        />
        {showTooltip && (
          <div
            ref={tooltipRef}
            className="absolute left-0 w-52 rounded-xl rounded-tl-none bg-gs00 p-3 text-14R text-gsBk shadow-lg md:w-64"
          >
            빠르게 할일을 추가해 모아놓으세요. 이후 필요한 날짜에 지정할 수
            있습니다.
          </div>
        )}
      </div>
      {basketLength > 0 && (
        <button
          type="button"
          className="ml-auto text-14M text-gs600"
          onClick={onDelete}
        >
          모두 지우기
        </button>
      )}
    </div>
  );
}
