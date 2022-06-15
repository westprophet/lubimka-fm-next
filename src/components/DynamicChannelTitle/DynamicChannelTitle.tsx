/**
 * Created by westp on 08.04.2022
 */

import React from 'react';
import s from './DynamicChannelTitle.module.scss';
import cn from 'classnames';
import { MChannelTitleSlider as ChannelTitleSlider } from '@pages/HomePage/sections/BannerSection/components/ChannelTitleSlider';
import IChannel from 'interfaces/IChannel';
import { motion } from 'framer-motion';

const variants = {
  show: {
    opacity: 1,
    transition: { duration: 1 },
  },
  hidden: {
    opacity: 1,
  },
};

const variants2 = {
  show: {
    y: '0',
    opacity: 1,
    transition: { duration: 1, delay: 1 },
  },
  hidden: {
    y: '50%',
    opacity: 0,
  },
};

export default function DynamicChannelTitle({
  className,
  title,
  channel,
}: IDynamicChannelTitleProps) {
  return (
    <div className={cn(s.DynamicChannelTitle, 'fire-text-effect ', className)}>
      <motion.h1
        variants={variants}
        initial="hidden"
        animate="show"
        viewport={{
          once: true,
        }}
      >
        {title}
      </motion.h1>
      <ChannelTitleSlider variants={variants2} initial="hidden" animate="show" channel={channel} />
    </div>
  );
}

DynamicChannelTitle.defaultProps = {
  className: '',
  title: 'Lubimka',
};

interface IDynamicChannelTitleProps {
  className?: string;
  title?: string;
  channel?: IChannel | null;
}