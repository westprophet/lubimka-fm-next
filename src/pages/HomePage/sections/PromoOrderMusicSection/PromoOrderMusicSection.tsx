import React, { useCallback, useContext, useState } from 'react';
import s from './PromoOrderMusicSection.module.scss';
import cn from 'classnames';
import SectionWrapper from '../../../../layouts/DefaultLayout/components/SectionWrapper';
import disk from './images/disk.webp';
import Image from 'next/image';
import LoadingButton from '@mui/lab/LoadingButton';
import { useRouter } from 'next/router';
import { RadioPlayerContext } from '../../../../contexts/RadioPlayerManager';
import { motion } from 'framer-motion';

const variantsImage = {
  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      delay: 0.5,
    },
  },
  hidden: {
    x: '100%',
  },
};

const variantsDesc = {
  visible: {
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const variantsChildren = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

export default function PromoOrderMusicSection() {
  const [loading, setLoading] = useState<boolean>(false);
  const r = useRouter();
  const { channel } = useContext(RadioPlayerContext);

  const pushOrderPageHandler = useCallback(() => {
    if (loading) return;
    setLoading(true);
    // eslint-disable-next-line promise/catch-or-return
    r.push(`/broadcast/${channel?.id}/order/tracks`).finally(() => setLoading(false));
  }, [channel?.id, loading, r]);
  return (
    <SectionWrapper.MWrapper
      className={cn(s.PromoOrderMusicSection)}
      // variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 1,
        once: true,
      }}
    >
      <motion.div className={cn(s.disk)} variants={variantsImage}>
        <Image src={disk} layout="fill" placeholder="blur" />
      </motion.div>
      <SectionWrapper.Inner>
        <motion.div className={cn(s.description)} variants={variantsDesc}>
          <motion.div variants={variantsChildren} className={cn(s.title)}>
            Заказывай
          </motion.div>
          <motion.div variants={variantsChildren} className={cn(s.subtitle)}>
            Любимый трек и наслаждайся звуком
          </motion.div>
          <LoadingButton
            component={motion.button}
            variants={variantsChildren}
            className={cn(s.button)}
            variant="outlined"
            loading={loading}
            color="primary"
            onClick={pushOrderPageHandler}
          >
            Заказать
          </LoadingButton>
        </motion.div>
      </SectionWrapper.Inner>
    </SectionWrapper.MWrapper>
  );
}
