import { useState } from 'react';

export default function useGetDate(startDate: string, endDate: string): string {
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

    if (isTwoDate && isNotBroke) {
      const isOneDay = start.isSame(end, 'day'); //В один и тот же день
      if (isOneDay) {
        if (isNowDay) date = `${start.format('Cегодня в HH:mm')} - ${end.format('HH:mm')}`;
        else date = `${start.format('DD MMMM HH:mm')} - ${end.format('HH:mm')}`;
      } else date = `${start.format('DD MMMM HH:mm')} - ${end.format('DD MMMM HH:mm')}`;
    } else if (isNowDay) date = start.format('Cегодня в HH:mm');
    setDate(date);
  });

  return date;
}
