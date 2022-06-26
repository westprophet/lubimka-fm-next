/**
 * Created by westprophet on 26.06.2022
 */

import React, { useCallback, useContext, useRef } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { RadioPlayerContext } from '../../../../../contexts/RadioPlayerManager';
import api from 'api/index';
import { useSnackbar } from 'notistack';

export default function AdditionalMenu({ trackID }: IAdditionalMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { channel } = useContext(RadioPlayerContext);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const { enqueueSnackbar } = useSnackbar();
  const timer = useRef<NodeJS.Timeout | undefined>();
  const downloadFileHandler = useCallback(() => {
    if (!channel || !trackID) return null;
    // eslint-disable-next-line promise/catch-or-return
    api.radio.tracks
      .downloadTrack({ c: channel, trackId: trackID })
      .catch(() => {
        enqueueSnackbar(`Что то произошло, при попытке скачать трек`, {
          variant: 'error',
          autoHideDuration: 3000,
        });
      })
      .finally(() => handleClose());
  }, [channel, enqueueSnackbar, trackID]);

  const orderTrackHandler = useCallback(() => {
    if (!channel || !trackID) return null;
    // eslint-disable-next-line promise/catch-or-return
    api.radio.tracks
      .orderTrack({ c: channel, id: trackID })
      .then((r) => {
        enqueueSnackbar(
          `Трек успешно заказан! Скоро вы услышите заказанный трек на этом канале, не переключайтесь`,
          {
            variant: 'success',
            autoHideDuration: 5000,
          }
        );
      })
      .catch((e) => {
        if (timer.current) clearTimeout(timer.current);
        console.error(e);

        //если пользователь заказал свой трек уже
        if (e.user_deny_duration) {
          enqueueSnackbar(
            `Заказ можно делать не чаще чем раз в ${e.user_deny_duration} мин. для одного пользователя`,
            {
              variant: 'warning',
              autoHideDuration: 5000,
            }
          );
          timer.current = setTimeout(() => {
            enqueueSnackbar(
              <div>
                Просто зайдите с другого устройства или зайдите на другой канал. И закажите! <br />
                <br /> PS: с ув. Администратор сайта
              </div>,
              {
                variant: 'info',
                autoHideDuration: 7000,
              }
            );
          }, 5000);
        } else if (e.status === 'ordersDisabled') {
          enqueueSnackbar(`Во время эфирных блоков заказ треков не работает`, {
            variant: 'warning',
            autoHideDuration: 5000,
          });
          timer.current = setTimeout(() => {
            enqueueSnackbar(`Подождите как пройдут пару треков в эфире и закажите трек повторно`, {
              variant: 'info',
              autoHideDuration: 7000,
            });
          }, 5500);
        }
      })
      .finally(() => handleClose());
  }, [channel, enqueueSnackbar, trackID]);

  return (
    <>
      <IconButton aria-label="more" onClick={handleClick}>
        <MoreHorizIcon fontSize="small" />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={downloadFileHandler}>Скачать</MenuItem>
        <MenuItem onClick={orderTrackHandler}>Заказать</MenuItem>
        <MenuItem>Искать</MenuItem>
        <MenuItem>Поделится</MenuItem>
      </Menu>
    </>
  );
}

AdditionalMenu.defaultProps = {
  className: '',
};

interface IAdditionalMenuProps {
  trackID?: string;
}
