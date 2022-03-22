import RadioHearthAPI from '../../global';
import IRadioHeartImage from '../../types/IRadioHeartImage';

//Получаем картинку по имени и названию трека
export const getImageByArtist = async (
  artist: string,
  title: string
): Promise<null | IRadioHeartImage> => {
  if (!artist || !title) return null;
  try {
    const { data }: IFetchRadioStreamDataResponse = await RadioHearthAPI.get(
      `http://image-fetcher.radioheart.ru/api/get-image`,
      {
        params: {
          artist,
          title,
        },
      }
    );
    if (data.status === 'fail') return null;
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export interface IFetchRadioStreamDataResponse {
  data: IRadioHeartImage;
}

export default getImageByArtist;
