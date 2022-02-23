import IMaterCapSettings from './IMaterCapSettings';
import IMeterStyleGradientElement from './IMeterStyleGradientElement';

export default interface IMeterSettings {
  height: number;
  width: number;
  capSettings: IMaterCapSettings;
  meterColor: string | IMeterStyleGradientElement[];
}
