//@ts-nocheck
import useDrawMeter from './useDrawMeter';

import ISpectrumSetting from '../types/ISpectrumSetting';

export default function useDrawSpectrum({ canvas, setting, analyser, isPaused }: IUseDrawSpectrum) {
  const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
  const { width, height, meterSetting } = setting;
  const drawMeter = useDrawMeter({
    сwidth: width,
    сheight: height,
    analyser,
    ctx,
    setting: meterSetting,
    isPaused,
  });
  this.animationId = requestAnimationFrame(drawMeter);
}

export interface IUseDrawSpectrum {
  analyser: AnalyserNode; // Обьект анализатора
  canvas: HTMLCanvasElement; //Референс холста
  setting: ISpectrumSetting; //Настройки отображения
  isPaused: boolean;
}
