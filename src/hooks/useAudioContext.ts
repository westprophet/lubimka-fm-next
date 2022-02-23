import isFrontendEnvironment from '../utils/isFrontendEnvironment';
import createAudioContext from '../contexts/RadioPlayerManager/utils/createAudioContext';
/***
  ВНИМАНИЕ: создавать контекст нужно после того как пользователь хотя бы что-нибудь нажмет
 Иначе:
  The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page. https://goo.gl/7K7WLu
*/

let ACTX: null | AudioContext = null;

//Получаем аудио контекст
export default function useAudioContext(): {
  initAudioContext(): boolean;
  ACTX: AudioContext;
} {
  return { ACTX, initAudioContext };
}

//Эту функцию вызываем вручную ввиду с того что контекст в данном случае нужно вызывать после любого нажатия пользователя.
// По этому мы запустим создание контекста по нажатию
const initAudioContext = (): boolean | null => {
  if (isFrontendEnvironment()) {
    if (!ACTX) {
      try {
        ACTX = createAudioContext();
        console.log('Audio Context was created!');
        return true;
      } catch (e) {
        console.error('Audio Context not created!', e);
        return false;
      }
    } else return true;
  }
};
