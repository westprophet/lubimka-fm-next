//получаем процент прокрутки страницы
export default function getScrollPercent(): number {
  if (!document) return 0;
  const h = document.documentElement,
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';
  return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}
