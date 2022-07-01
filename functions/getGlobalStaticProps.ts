import api from 'api/index';
import { GetStaticPropsResult } from 'next/types';
import IChannel from 'interfaces/IChannel';
import { GetStaticProps } from 'next';

//Дополняем StaticProps дополнительными данными
export default async function getGlobalStaticProps<P>(
  d?: GetStaticPropsResult<P>
): Promise<GetStaticPropsResult<P> | GetStaticPropsResult<IGetGlobalStaticProps>> {
  const channels = await api.strapi.channels.getChannels();
  const _props = {
    channels,
  };
  if (d && 'props' in d) return { ...d, props: { ...d.props, ..._props } };
  else if (!d)
    return {
      props: { ..._props },
    };
  else return d;
}

export interface IGetGlobalStaticProps {
  channels: IChannel[];
}

export const getStaticProps: GetStaticProps = async () => {
  return await getGlobalStaticProps<IGetGlobalStaticProps>();
};
