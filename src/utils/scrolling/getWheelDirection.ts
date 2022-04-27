//Получаем направления скролла
import TScrollDirection from '../../types/TScrollDirection';

export default function getWheelDirection(event: Event): TScrollDirection {
  return checkScrollDirectionIsUp(event) ? 'Up' : 'Down';
}

// @ts-ignore
function checkScrollDirectionIsUp(event): boolean {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}
