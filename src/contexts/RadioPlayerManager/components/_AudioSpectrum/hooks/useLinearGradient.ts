//@ts-nocheck
import IMeterStyleGradientElement from '../types/IMeterStyleGradientElement';

export default function useLinearGradient({ meterStyles, ctx }): CanvasGradient | string {
  let gradient: string | CanvasGradient = ctx.createLinearGradient(0, 0, 0, 300);
  //Если массив стилей – то проходимся по нему
  if (Array.isArray(meterStyles) && typeof gradient !== 'string') {
    const stops = meterStyles;
    const len = stops.length;
    for (let i = 0; i < len; i++) gradient.addColorStop(stops[i]['stop'], stops[i]['color']);
  }
  //если 1 стиль в строке
  else if (typeof meterStyles === 'string') gradient = meterStyles;
  return gradient;
}

export interface IUseLinearGradientArg {
  meterColor: string | IMeterStyleGradientElement[];
  ctx: CanvasRenderingContext2D;
}
