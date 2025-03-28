'use client';

import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import TodoBasket from '@/components/todoCalendar/todoBasket/TodoBasket';
import Calendar from '@/components/todoCalendar/calendar/Calendar';
import TodoList from '@/components/todoCalendar/todoList/TodoList';
import TodoModal from '@/components/todoCalendar/TodoModal';
import Loading from '@/components/common/Loading';
import { useMonthlyTodos } from '@/hooks/useTodos';

export default function Page() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear(),
  );
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth() + 1,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // 한 달 단위 할 일
  const {
    data: monthlyTodos = [],
    isLoading,
    error,
  } = useMonthlyTodos(currentYear, currentMonth);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (error)
      toast.error(
        '데이터 불러오는 중 오류가 발생했습니다. 다시 로그인해주세요.',
      );
  }, [error]);

  if (!mounted && isLoading) {
    return (
      <div className="relative flex flex-col justify-center gap-4 md:h-full md:flex-row">
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div className="relative flex flex-col justify-center gap-4 md:h-full md:flex-row">
        <div className="flex flex-col gap-4 md:h-full md:flex-1">
          <Calendar
            todos={monthlyTodos}
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
            onMonthChange={(year, month) => {
              setCurrentYear(year);
              setCurrentMonth(month);
            }}
          />
          <TodoBasket />
        </div>
        <div className="w-full flex-none md:w-64 xl:w-80">
          <TodoList selectedDate={selectedDate} onOpenModal={handleOpenModal} />
        </div>
      </div>

      {isModalOpen && (
        <TodoModal
          selectedDate={selectedDate}
          onCloseModal={handleCloseModal}
        />
      )}
    </>
  );
}
