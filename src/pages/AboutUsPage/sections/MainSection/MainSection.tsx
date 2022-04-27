/**
 * Created by westp on 23.04.2022
 */

import React from 'react';
import s from './MainSection.module.scss';
import cn from 'classnames';
import hearth from 'assets/images/hearth-min.webp';
import Image from 'next/image';
import Section from '../../../../layouts/DefaultLayout/components/SectionWrapper';

export default function MainSection({ className }: IMainSectionProps) {
  return (
    <Section.Wrapper className={cn(s.MainSection, className)}>
      <div className={cn(s.promo)}>
        <Image
          src={hearth}
          placeholder="blur"
          objectFit="cover"
          layout="intrinsic"
          alt="hearth lubimka about us"
        />
      </div>
      <div className={cn(s.desc)}>
        <p>
          Задача организации, в особенности же сложившаяся структура организации играет важную роль
          в формировании модели развития. Значимость этих проблем настолько очевидна, что новая
          модель организационной деятельности требуют от нас анализа существенных финансовых и
          административных условий. Идейные соображения высшего порядка, а также консультация с
          широким активом играет важную роль в формировании системы обучения кадров, соответствует
          насущным потребностям. Повседневная практика показывает, что дальнейшее развитие различных
          форм деятельности позволяет выполнять важные задания по разработке дальнейших направлений
          развития. Значимость этих проблем настолько очевидна, что начало повседневной работы по
          формированию позиции обеспечивает широкому кругу (специалистов) участие в формировании
          новых предложений. Значимость этих проблем настолько очевидна, что начало повседневной
          работы по формированию позиции представляет собой интересный эксперимент проверки
          соответствующий условий активизации. Значимость этих проблем настолько очевидна, что
          начало повседневной работы по формированию позиции влечет за собой процесс внедрения и
          модернизации направлений прогрессивного развития.
        </p>
        <h2>Наши цели</h2>
        <ul>
          <li>♥ Цель 1 </li>
          <li>♥ Цель 1 </li>
          <li>♥ Цель 1 </li>
          <li>♥ Цель 1 </li>
          <li>♥ Цель 1 </li>
        </ul>
      </div>
    </Section.Wrapper>
  );
}

MainSection.defaultProps = {
  className: '',
};

interface IMainSectionProps {
  className?: string;
}
