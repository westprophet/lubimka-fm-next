import isFrontendEnvironment from 'src/utils/isFrontendEnvironment';

//Просто тупо создаем аудиоконтекст
export default function createAudioContext(): null | AudioContext {
  if (!isFrontendEnvironment()) return null;
  // @ts-ignore
  return new (window.AudioContext || window.webkitAudioContext)();
}
