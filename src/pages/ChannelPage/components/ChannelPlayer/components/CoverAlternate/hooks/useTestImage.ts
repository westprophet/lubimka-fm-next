import { useEffect, useState } from 'react';

let count = 1;
export default function useTestImage() {
  const [_image, setImg] = useState<string | null>();
  const [_loading, setLoading] = useState<boolean>();
  useEffect(() => {
    setInterval(() => {
      setLoading(true);
      setTimeout(() => {
        if (count === 1) {
          setImg(
            'https://image-fetcher.radioheart.ru/storage/images/The Black Eyed Peas/The Black Eyed Peas - Shut Up.jpg'
          );
        } else if (count === 2) {
          setImg(null);
        } else if (count === 3) {
          setImg(
            'https://image-fetcher.radioheart.ru/storage/images/Chingishan/Chingishan - Moskau.jpg'
          );
        } else if (count === 4) {
          setImg(
            'https://image-fetcher.radioheart.ru/storage/images/Корни/Корни - Плакала берёза.jpg'
          );
        } else if (count === 5) {
          setImg(null);
        }
        setLoading(false);
        if (count < 6) count++;
        else count = 1;
      }, 200);
    }, 3000);
  }, []);
  return { _image, _loading };
}

//https://image-fetcher.radioheart.ru/storage/images/The Black Eyed Peas/The Black Eyed Peas - Shut Up.jpg
//https://image-fetcher.radioheart.ru/storage/images/Chingishan/Chingishan - Moskau.jpg
//https://image-fetcher.radioheart.ru/storage/images/Корни/Корни - Плакала берёза.jpg
