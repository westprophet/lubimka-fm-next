/**
 * Created by westp on 22.04.2022
 */

import React from 'react';
import s from './PromoDownloadSection.module.scss';
import cn from 'classnames';
import SectionWrapper from 'src/layouts/DefaultLayout/components/SectionWrapper';
import Image from 'next/image';
import bg from './images/background-min.webp';
import phone from './images/Phone-min.webp';
import AppStoreButton from 'components/buttons/AppStoreButton';
import GooglePlayButton from 'components/buttons/GooglePlayButton';
import { motion } from 'framer-motion';

const variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
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

const variantsButton = {
  visible: {
    opacity: 1,
    x: 0,
  },
  hidden: (custom: 'left' | 'right') => ({
    x: custom === 'left' ? '-100%' : '100%',
    opacity: 0,
  }),
};

export default function PromoDownloadSection({ className }: IPromoDownloadSectionProps) {
  return (
    <SectionWrapper.MWrapper
      className={cn(s.PromoDownloadSection, className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 0.8,
        once: true,
      }}
    >
      <Image
        src={bg}
        className="bg"
        layout="fill"
        placeholder="blur"
        objectFit="cover"
        quality={50}
      />
      <motion.div className={cn(s.phoneContainer)} variants={variantsChildren}>
        <Image
          src={phone}
          className="phone"
          width={615}
          height={574}
          layout="responsive"
          placeholder="blur"
          objectFit="cover"
          // quality={100}
        />
      </motion.div>
      <SectionWrapper.Inner>
        <div className={cn(s.description)}>
          <motion.h2 variants={variantsChildren} className="title">
            Между нами химия
          </motion.h2>
          <motion.p variants={variantsChildren}>
            Скачивай приложение, <br />
            будь с <span>Lubimka FM</span>
          </motion.p>
          <div>
            <motion.div variants={variantsButton} custom="left">
              <AppStoreButton />
            </motion.div>
            <motion.div variants={variantsButton} custom="right">
              <GooglePlayButton />
            </motion.div>
          </div>
        </div>
      </SectionWrapper.Inner>
    </SectionWrapper.MWrapper>
  );
}

PromoDownloadSection.defaultProps = {
  className: '',
};

interface IPromoDownloadSectionProps {
  className?: string;
}
