/**
 * Created by westp on 16.06.2022
 */

import React from 'react';
import s from './RadioProgramsSection.module.scss';
import cn from 'classnames';
import { QuadContentSection as QS } from 'layouts/DefaultLayout/components/DoubleSection';
import { IRadioProgram } from 'interfaces/IRadioProgram';
import RadioProgramm from 'components/RadioProgramm';
import { IChannel } from 'interfaces/IChannel';
import useGetRadioPrograms from 'hooks/channel/useGetRadioPrograms';

export default function RadioProgramsSection({ programs, channel }: IRadioProgramsSectionProps) {
  const disabledFetch = !!programs;
  const { data: result, isLoading } = useGetRadioPrograms({
    c: channel,
    initialPrograms: programs,
    disabled: disabledFetch,
  });
  const _programs: IRadioProgram[] | null = disabledFetch ? programs : result;
  return (
    <QS.Container
      index={4}
      title="Радиопрограммы"
      colorType={2}
      className={cn(s.RadioProgramsSection)}
      isLoading={isLoading}
    >
      <QS.Inner className={cn(s.inner)} withHorizontalPadding={false}>
        {_programs?.map((rp: IRadioProgram) => {
          return (
            <RadioProgramm
              key={`radio-program-${rp.id}`}
              rp={rp}
              className={cn(s.programm)}
              disableSchedule
            />
          );
        })}
      </QS.Inner>
    </QS.Container>
  );
}

RadioProgramsSection.defaultProps = {
  className: '',
};

interface IRadioProgramsSectionProps {
  programs?: IRadioProgram[] | null;
  channel: IChannel;
}
