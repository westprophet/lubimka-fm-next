import { useState } from 'react';

export default function useGetDate(
  startDate: string,
  endDate: string,
  onlyStartDate = false
): string {
  const [date, setDate] = useState('');
  // eslint-disable-next-line promise/catch-or-return
  import('moment').then((res: any) => {
    if (!res) return;
    const { default: moment } = res;

    const start = moment(startDate),
      end = moment(endDate);

    let date = start.format('DD MMMM HH:mm');

    const isTwoDate = startDate && endDate; // Это диапазон
    const isNotBroke = start.isBefore(end);
    const isNowDay = start.isSame(moment(), 'day');
    const isOneDay = start.isSame(end, 'day'); //В один и тот же день

    //Если это 2 даты и даты не перепутаны
    if (isTwoDate && isNotBroke && !onlyStartDate) {
      //Если дата начала и конца в 1 день
      if (isOneDay) {
        //Если это сегодня
        if (isNowDay) {
          date = `${start.format('Cегодня в HH:mm')} - ${end.format('HH:mm')}`;
        }
        //Не сегодня
        else {
          date = `${start.format('DD MMMM HH:mm')} - ${end.format('HH:mm')}`;
        }
      } else {
        //Разные даты
        date = `${start.format('DD MMMM HH:mm')} - ${end.format('DD MMMM HH:mm')}`;
      }
    } else {
      if (isNowDay) date = start.format('Cегодня в HH:mm');
    }

    setDate(date);
  });

  return date;
}
