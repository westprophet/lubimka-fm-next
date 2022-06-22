import { useEffect } from 'react';
import TAudioTitle from 'types/TAudioTitle';
// import { TAudioManagerStatus } from 'types/TAudioManagerStatus';
import IChannel from 'interfaces/IChannel';

export default function useDynamicPageTitle(channel: IChannel, title: TAudioTitle | null) {
  useEffect(() => {
    document.title = `${title?.artist} - ${title?.title} | Lubimka ${channel.attributes.title}`;
  }, [channel.attributes.title, title]);
}
