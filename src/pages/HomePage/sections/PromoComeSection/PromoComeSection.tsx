/**
 * Created by westp on 11.04.2022
 */
import React, { useCallback, useState } from 'react';
import s from './PromoComeSection.module.scss';
import cn from 'classnames';
import SectionWrapper from 'src/layouts/DefaultLayout/components/SectionWrapper';
import Image from 'next/image';
import bg from './images/1-1.webp';
import LoadingButton from '@mui/lab/LoadingButton';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const variantsDesc = {
  visible: {
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
      delayChildren: 0.3,
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

export default function PromoComeSection() {
  const [loading, setLoading] = useState<boolean>(false);
  const r = useRouter();

  const pushHandler = useCallback(() => {
    if (loading) return;
    setLoading(true);
    // eslint-disable-next-line promise/catch-or-return
    r.push(`/club-life/clubs-nearby/`).finally(() => setLoading(false));
  }, [loading, r]);

  return (
    <SectionWrapper.MWrapper
      className={cn(s.PromoComeSection)}
      initial="hidden"
      whileInView="visible"
    >
      <Image
        src={bg}
        className={cn(s.bg)}
        layout="fill"
        placeholder="blur"
        objectFit="cover"
        quality={75}
      />
      <SectionWrapper.Inner>
        <motion.div className={cn(s.description)} variants={variantsDesc}>
          <motion.div variants={variantsChildren} className={cn(s.title)}>
            Приходи к нам
          </motion.div>
          <motion.p variants={variantsChildren}>и мы украсим твои серые будни</motion.p>
          <LoadingButton
            component={motion.button}
            variants={variantsChildren}
            className={cn(s.button)}
            variant="outlined"
            loading={loading}
            color="primary"
            onClick={pushHandler}
          >
            Клубы рядом
          </LoadingButton>
        </motion.div>
      </SectionWrapper.Inner>
    </SectionWrapper.MWrapper>
  );
}
