/**
 * Created by westp on 06.06.2022
 */

// @ts-ignore
import React, { startTransition, useState } from 'react';
import s from './VerticalTrackComponent.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import { DATA_FOR_BLUR_ALT } from '../../../constants/DATA_FOR_BLUR';
import NoImage from 'components/UI/NoImage';
import useImageState from 'hooks/useImageState';
import TAudioTitle from '../../../types/TAudioTitle';
import { AnimatePresence, motion } from 'framer-motion';
// @ts-ignore
import PlayButton from 'components/UI/buttons/PlayButton';

const variantsImage = {
  show: { opacity: 1, transition: { duration: 0.3, delay: 0 } },
  hidden: { opacity: 0, transition: { duration: 0.2, delay: 0.2 } },
};

export default function VerticalTrackComponent({
  className,
  isShowCover,
  isCanFetchImage,
  title,
  cover,
  disablePlayButton,
}: IVerticalTrackDataProps) {
  // Запрашиваем картинку для трека
  const { image } = useImageState(title, isCanFetchImage && isShowCover && !cover);
  const _cover = image ?? cover;
  const isNoImg = typeof image !== 'string' || !_cover;
  const [isLoadImage, setIsLoadImage] = useState<boolean>(false);
  // useEffect(() => startTransition(() => setIsLoadImage(false)), [title]);

  return (
    <AnimatePresence onExitComplete={() => setIsLoadImage(false)}>
      {title && (
        <motion.div
          key={`vertical-track-${title}`}
          variants={variantsImage}
          initial={'hidden'}
          animate={isLoadImage || isNoImg ? 'show' : 'hidden'}
          exit="hidden"
          className={cn(s.VerticalTrack, className)}
        >
          {isShowCover && (
            <div className={cn(s.cover, 'cover', { [s.noImageContainer]: isNoImg })}>
              {!disablePlayButton ? (
                <PlayButton status="paused" type={2} onClick={() => {}} className={cn(s.playA)} />
              ) : null}
              {!isNoImg ? (
                <Image
                  src={_cover}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL={DATA_FOR_BLUR_ALT}
                  loading="eager"
                  onLoadingComplete={() => startTransition(() => setIsLoadImage(true))}
                />
              ) : (
                <NoImage className={cn(s.noImg)} />
              )}
            </div>
          )}

          <div className={cn(s.content)}>
            {!disablePlayButton && (
              <PlayButton status="paused" type={2} onClick={() => {}} className={cn(s.playD)} />
            )}

            <div className={cn(s.title, 'title')}>
              <div className={cn(s.name)}>{title?.title}</div>
              <div className={cn(s.artist, 'artist')}>{title?.artist}</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

VerticalTrackComponent.defaultProps = {
  className: '',
  isShowCover: true,
  disablePlayButton: true,
};

export interface IVerticalTrackProps {
  className?: string;
  isCanFetchImage?: boolean;
  isShowCover?: boolean;
  disablePlayButton?: boolean;
}

interface IVerticalTrackDataProps extends IVerticalTrackProps {
  title: TAudioTitle | null;
  source?: string;
  cover?: string | null;
}
