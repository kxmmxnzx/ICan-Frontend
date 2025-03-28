import FullCalendar from '@fullcalendar/react';
import { useRef } from 'react';
import { Todo } from '@/types/todos';
import CalendarBody from './CalendarBody';
import CalendarHeader from './CalendarHeader';

interface Props {
  todos: Todo[];
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
  onMonthChange: (year: number, month: number) => void;
}

/**
 * 캘린더 전체 컴포넌트
 * 캘린더 헤더 + 바디
 * @param todos 할 일 전체
 * @param selectedDate 선택된 날짜
 * @param onSelectDate 선택 날짜 변경 함수
 * @param onMonthChange 달력의 달 변경 함수
 */
export default function Calendar({
  todos,
  selectedDate,
  onSelectDate,
  onMonthChange,
}: Props) {
  const calendarRef = useRef<FullCalendar>(null);
  return (
    <div className="flex flex-none flex-col">
      <CalendarHeader
        calendarRef={calendarRef}
        onSelectDate={onSelectDate}
        onMonthChange={onMonthChange}
      />
      <CalendarBody
        todos={todos}
        selectedDate={selectedDate}
        onSelectDate={onSelectDate}
        calendarRef={calendarRef}
        onMonthChange={onMonthChange}
      />
    </div>
  );
}
