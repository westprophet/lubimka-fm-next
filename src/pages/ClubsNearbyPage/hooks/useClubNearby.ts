import { useQuery } from 'react-query';
import api from 'api/index';
import TCoords from 'types/TCoords';
import {
  IGetClubsNearbyRequestParams,
  IGetClubsNearbyReturn,
} from 'api/strapi/routes/clubs/getClubsNearby';

export default function useClubNearby(location: TCoords | null) {
  return useQuery<IGetClubsNearbyReturn>(
    ['clubNearby', location],
    () => {
      const params: IGetClubsNearbyRequestParams = {
        lat: String(location?.lat),
        lng: String(location?.lng),
        radius: 1.5,
      };
      return api.strapi.clubs.getClubsNearby(params);
    },
    {
      retryDelay: 1000,
      enabled: !!location,
      staleTime: 1000 * 60 * 60 * 24,
      notifyOnChangeProps: 'tracked',
      refetchOnWindowFocus: false,
    }
  );
}
