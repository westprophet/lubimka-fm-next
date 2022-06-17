/**
 * Created by westp on 17.06.2022
 */

import React from 'react';
import s from './RadioProgramPage.module.scss';
import cn from 'classnames';
import { IDaySchedule, IRadioProgram } from 'interfaces/IRadioProgram';
import DefaultLayout from 'layouts/DefaultLayout';
import DSection from 'layouts/DefaultLayout/components/DoubleSection';
import { getImageUrl } from '@tools/IWrappedStrapiImage';
import ReactMarkdown from 'react-markdown';
import TimeString from 'components/UI/others/TimeString';

export default function RadioProgramPage({ className, program }: IRadioProgramsPageProps) {
  const cover = getImageUrl(program.attributes.cover);
  const DaySchedule = program.attributes.DaySchedule;
  return (
    <DefaultLayout.Layout
      className={cn(s.RadioProgramPage, className)}
      header={{ isFix: false, isFixedShow: true, isTransparent: true, isShow: true }}
      player={{ isDisable: true }}
    >
      <DSection.Wrapper>
        <DSection.Preview.Wrapper cover={cover} className={cn(s.previewContainer)}>
          <DefaultLayout.PageTitle>Назад</DefaultLayout.PageTitle>
          <DSection.Preview.Inner className={cn(s.previewInner)}>
            <h1 className={cn(s.title)}>{program.attributes.title}</h1>
          </DSection.Preview.Inner>
        </DSection.Preview.Wrapper>
        <DSection.Content.Wrapper className={cn(s.content)}>
          <DSection.Content.Container colorType={1} className={cn(s.description)} title="Описание">
            <ReactMarkdown>{program.attributes.description}</ReactMarkdown>
          </DSection.Content.Container>
          {DaySchedule && (
            <DSection.Content.Container title="Расписание" colorType={2}>
              {DaySchedule.map((ds: IDaySchedule) => (
                <TimeString key={ds.title} time={ds.title} />
              ))}
            </DSection.Content.Container>
          )}
        </DSection.Content.Wrapper>
      </DSection.Wrapper>
    </DefaultLayout.Layout>
  );
}

RadioProgramPage.defaultProps = {
  className: '',
};

interface IRadioProgramsPageProps {
  className?: string;
  program: IRadioProgram;
}
