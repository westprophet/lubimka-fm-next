import IChannel from '../../../../../interfaces/IChannel';
import tools from '../../../../../tools';

export const downloadTrack = async ({ c, trackId }: IDownloadTrackParams) => {
  if (!c || !trackId) return null;
  try {
    const baseURL = tools.IChannel.getBaseURL(c);
    const user = c.attributes.stream.user;
    const url = new URL(`${baseURL}/api/json`);
    url.searchParams.set('userlogin', user);
    url.searchParams.set('api', 'getFile');
    url.searchParams.set('id', String(trackId));
    location.href = url.href;
  } catch (e) {
    console.error('Не удалось скачать трек', e);
  }
};

export interface IDownloadTrackParams {
  trackId?: string | number;
  c?: IChannel | null;
}

export default downloadTrack;
