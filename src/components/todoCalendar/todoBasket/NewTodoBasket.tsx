import { useEffect, useRef, useState } from 'react';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from '@/components/common/button/Button';
import Icon from '@/components/common/icon/Icon';

interface Props {
  onAddTodo: (title: string, onSuccess: () => void) => void;
}

export default function NewTodoBasket({ onAddTodo }: Props) {
  const [isAdding, setIsAdding] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Escape') setIsAdding(false);
    else if (event.key === 'Enter') {
      if (!event.nativeEvent.isComposing) {
        const title = inputRef?.current?.value.trim() || '';
        onAddTodo(title, () => setIsAdding(false));
      }
    }
  };

  useEffect(() => {
    if (isAdding) inputRef?.current?.focus();
  }, [isAdding]);

  if (isAdding)
    return (
      <div className="flex h-11 w-48 items-center rounded-lg border border-transparent bg-slate50 p-3 focus-within:border focus-within:border-slate500 hover:bg-slate100">
        <input
          className="min-w-0 flex-1 bg-transparent text-16R text-gsBk focus:outline-none"
          ref={inputRef}
          type="text"
          onKeyDown={handleKeyDown}
          onBlur={() => setIsAdding(false)}
        />
        <Icon
          icon={faXmark}
          className="size-7 flex-none cursor-pointer text-gs400"
        />
      </div>
    );

  return (
    <Button
      className="active:none h-11 w-48 border border-slate300 bg-gs00 p-3 text-14R text-slate700 transition-all hover:border-transparent hover:bg-slate100 focus:border focus:border-slate500 focus:bg-slate50 focus:text-gsBk active:border active:border-slate300 active:bg-gs20 2xl:w-52 2xl:text-16R"
      onClick={() => setIsAdding(true)}
    >
      <Icon icon={faPlus} />
      장바구니에 새 할일 추가
    </Button>
  );
}
