/**
 * Created by westp on 09.05.2022
 */

// @ts-ignore
import React, { useState, startTransition } from 'react';
import s from './ClubsPage.module.scss';
import cn from 'classnames';
import DefaultLayout from 'src/layouts/DefaultLayout';
import { IClub } from '../../interfaces';
import Club from 'components/Club';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import isEmptyString from '../../utils/isEmptyString';
import isEmptyArray from '../../utils/isEmptyArray';

export default function ClubsPage({ clubs }: IClubsPageProps) {
  const [search, setSearch] = useState<string>();

  const handleChange = (e: { target: { value: React.SetStateAction<string | undefined> } }) => {
    startTransition(() => {
      setSearch(e.target.value);
    });
  };

  let _clubs = clubs;

  if (!isEmptyString(search))
    _clubs = _clubs?.filter((c: IClub) =>
      c.attributes.title.toLocaleLowerCase().includes(String(search?.toLocaleLowerCase()))
    );

  const isEmpty = isEmptyArray(_clubs);

  return (
    <DefaultLayout.Layout className={cn(s.ClubsPage)}>
      <DefaultLayout.PageWrapper>
        <DefaultLayout.PageTitle
          title="Клубы"
          breadcrumbs={[
            {
              title: 'Club Life',
              link: '/club-life',
            },
            {
              title: 'Клубы',
            },
          ]}
        />
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
        </DefaultLayout.Section.Wrapper>

        {!isEmpty ? (
          <DefaultLayout.Section.Wrapper>
            <DefaultLayout.Section.Inner className={cn(s.ViewSection)}>
              {_clubs.map((c: IClub, i: number) => (
                <Club key={`club-${c.id}-${i}`} club={c} resizable />
              ))}
            </DefaultLayout.Section.Inner>
          </DefaultLayout.Section.Wrapper>
        ) : (
          <DefaultLayout.Section.Inner>
            <h2>По данному запросу ничего не найдено</h2>
          </DefaultLayout.Section.Inner>
        )}
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
