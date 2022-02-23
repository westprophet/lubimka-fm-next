import useLinearGradient from './useLinearGradient';
import IMeterSettings from '../types/IMeterSettings';

export default function useDrawMeter({
  cwidth,
  cheight,
  analyser,
  ctx,
  setting,
  isPaused,
}: IUseDrawMaterArg) {
  const { height, width, capSettings, meterColor } = setting; // Получаем настройки столбцов

  const capYPositionArray = []; // store the vertical position of hte caps for the preivous frame
  const gradient: CanvasGradient | string = useLinearGradient({
    ctx,
    meterStyles: meterColor,
  });

  const drawMeter = () => {
    const array = new Uint8Array(analyser.frequencyBinCount); // item value of array: 0 - 255
    analyser.getByteFrequencyData(array);

    if (isPaused) {
      for (let i = array.length - 1; i >= 0; i--) {
        array[i] = 0;
      }
      const allCapsReachBottom = !capYPositionArray.some((cap) => cap > 0);
      if (allCapsReachBottom) {
        ctx.clearRect(0, 0, cwidth, cheight + this.props.capHeight);
        cancelAnimationFrame(this.animationId); // since the sound is top and animation finished, stop the requestAnimation to prevent potential memory leak,THIS IS VERY IMPORTANT!
        return;
      }
    }

    const step = Math.round(array.length / this.props.meterCount); // sample limited data from the total array
    ctx.clearRect(0, 0, cwidth, cheight + this.props.capHeight);
    for (let i = 0; i < this.props.meterCount; i++) {
      const value = array[i * step];
      if (capYPositionArray.length < Math.round(this.props.meterCount)) {
        capYPositionArray.push(value);
      }
      ctx.fillStyle = this.props.capColor;
      // draw the cap, with transition effect
      if (value < capYPositionArray[i]) {
        // let y = cheight - (--capYPositionArray[i])
        const preValue = --capYPositionArray[i];
        const y = ((270 - preValue) * cheight) / 270;
        ctx.fillRect(
          i * (this.props.meterWidth + this.props.gap),
          y,
          this.props.meterWidth,
          this.props.capHeight
        );
      } else {
        // let y = cheight - value
        const y = ((270 - value) * cheight) / 270;
        ctx.fillRect(
          i * (this.props.meterWidth + this.props.gap),
          y,
          this.props.meterWidth,
          this.props.capHeight
        );
        capYPositionArray[i] = value;
      }
      ctx.fillStyle = gradient; // set the filllStyle to gradient for a better look

      // let y = cheight - value + this.props.capHeight
      const y = ((270 - value) * cheight) / 270 + this.props.capHeight;
      ctx.fillRect(i * (this.props.meterWidth + this.props.gap), y, this.props.meterWidth, cheight); // the meter
    }
    this.animationId = requestAnimationFrame(drawMeter);
  };

  return drawMeter;
}

export interface IUseDrawMaterArg {
  cwidth: number; // Ширина канваса
  cheight: number; //Высота канваса
  analyser: AnalyserNode; // Обьект анализатора
  ctx: CanvasRenderingContext2D; // контекст канвы
  setting: IMeterSettings;
  isPaused: boolean;
}
