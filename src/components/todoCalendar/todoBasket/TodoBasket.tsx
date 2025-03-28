'use client';

import { Draggable } from '@fullcalendar/interaction';
import { useEffect, useRef, useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../../common/button/IconButton';

import {
  useAddTodoBasket,
  useDeleteAllTodoBasket,
  useDeleteTodoBasket,
  useTodoBasketLists,
} from '@/hooks/useTodoBasket';
import ConfirmModal from '../../common/ConfirmModal';
import NewTodoBasket from './NewTodoBasket';
import TodoBasketHeader from './TodoBasketHeader';

export default function TodoBasket() {
  const { data: basketList = [], isLoading, error } = useTodoBasketLists();
  const { mutate: addTodoBasket } = useAddTodoBasket();
  const { mutate: deleteTodoBasket } = useDeleteTodoBasket();
  const { mutate: deleteAllTodoBasket } = useDeleteAllTodoBasket();

  const [showConfirm, setShowConfirm] = useState(false);
  const basketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (basketRef.current) {
      const draggable = new Draggable(basketRef.current, {
        itemSelector: '.draggable-todo',
        eventData: (eventEl) => ({
          id: eventEl.getAttribute('data-id'),
          title: eventEl.getAttribute('data-title'),
          goalId: eventEl.getAttribute('data-goalid'),
        }),
      });

      return () => draggable.destroy();
    }
    return undefined;
  }, []);

  /**
   *
   * @param title 이미 trim된 장바구니 제목
   * @param onSuccess 장바구니 -> 할일 성공 시 전달할 함수
   */
  const handleAddTodo = (title: string, onSuccess: () => void) => {
    if (title) addTodoBasket({ title }, { onSuccess });
  };

  const clickDeleteAllBasket = () => {
    setShowConfirm(true);
  };

  const confirmDeleteAll = () => {
    deleteAllTodoBasket();
    setShowConfirm(false);
  };

  return (
    <div className="relative flex w-full flex-none flex-col gap-4 overflow-x-hidden rounded-2xl border-2 border-gs200 bg-gs00 p-4 md:min-h-32 md:flex-1 md:overflow-hidden">
      <TodoBasketHeader
        basketLength={basketList?.length || 0}
        onDelete={clickDeleteAllBasket}
      />
      <div
        ref={basketRef}
        className="flex min-h-11 w-full flex-1 flex-wrap gap-3 overflow-y-auto overflow-x-hidden"
      >
        {isLoading && (
          <p className="text-center text-sm text-gray-500">로딩 중...</p>
        )}
        {error && (
          <p className="text-center text-sm text-red-500">
            데이터를 불러오는데 실패했습니다.
          </p>
        )}
        {!isLoading && !error && (
          <>
            <NewTodoBasket onAddTodo={handleAddTodo} />
            {basketList.map((todo) => (
              <div
                key={todo.id}
                className="draggable-todo flex h-11 max-w-full cursor-grab items-center justify-between gap-2 rounded-lg bg-slate50 p-3 active:cursor-grabbing active:bg-slate200 md:max-w-80"
                draggable
                data-id={todo.id}
                data-title={todo.title}
                data-goalid={todo.goalId}
              >
                <span className="truncate text-14R text-gsBk 2xl:text-16R">
                  {todo.title}
                </span>
                <IconButton
                  icon={faXmark}
                  className="text-gs400"
                  onClick={() => deleteTodoBasket(todo.id)}
                />
              </div>
            ))}
          </>
        )}
      </div>
      {showConfirm && (
        <ConfirmModal
          title="정말 모두 지우시겠어요?"
          description="작성된 내용이 모두 사라지고 복구할 수 없습니다."
          confirmText="지우기"
          onCancel={() => setShowConfirm(false)}
          onConfirm={confirmDeleteAll}
        />
      )}
    </div>
  );
}
