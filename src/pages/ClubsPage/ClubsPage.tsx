/**
 * Created by westp on 09.05.2022
 */

// @ts-ignore
import React, { useState, useTransition } from 'react';
import s from './ClubsPage.module.scss';
import cn from 'classnames';
import DefaultLayout from 'src/layouts/DefaultLayout';
// import CallbackSection from '../ChannelsPage/sections/CallbackSection';
import GridSection from '../../layouts/DefaultLayout/components/GridSection';
import { IClub } from '../../interfaces';
import Club from 'components/Club';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import isEmptyString from '../../utils/isEmptyString';
import isEmptyArray from '../../utils/isEmptyArray';

export default function ClubsPage({ clubs }: IClubsPageProps) {
  const [search, setSearch] = useState<string>();
  const [inTransition, startTransition] = useTransition();

  const handleChange = (e) => {
    startTransition(() => {
      setSearch(e.target.value);
    });
  };

  let _clubs = clubs;
  // let _clubs = [...clubs, ...clubs, ...clubs, ...clubs, ...clubs];

  if (!isEmptyString(search))
    _clubs = _clubs?.filter((c: IClub) =>
      c.attributes.title.toLocaleLowerCase().includes(String(search?.toLocaleLowerCase()))
    );

  const isEmpty = isEmptyArray(_clubs);

  return (
    <DefaultLayout.Layout className={cn(s.ClubsPage)}>
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle url="/">Клубы</DefaultLayout.PageTitle>
        <DefaultLayout.Section.Wrapper>
          <DefaultLayout.Section.Inner>
            <TextField
              placeholder="Поиск"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
              value={search}
              onChange={handleChange}
            />
          </DefaultLayout.Section.Inner>
          {!isEmpty ? (
            <GridSection className={cn(s.ViewSection)}>
              {_clubs.map((c: IClub, i: number) => (
                <Club key={`club-${c.id}-${i}`} club={c} />
              ))}
            </GridSection>
          ) : (
            <DefaultLayout.Section.Inner>
              <h2>По данному запросу ничего не найдено</h2>
            </DefaultLayout.Section.Inner>
          )}
        </DefaultLayout.Section.Wrapper>
      </DefaultLayout.PageWrapper>
    </DefaultLayout.Layout>
  );
}

ClubsPage.defaultProps = {
  className: '',
};

interface IClubsPageProps {
  clubs: IClub[];
}
