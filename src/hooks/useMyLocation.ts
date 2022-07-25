import { useEffect, useState } from 'react';
import TCoords from 'types/TCoords';

export default function useMyLocation() {
  const [coords, setCoords] = useState<TCoords | null>(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoords({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);
  return coords;
}
