import IChannel from 'src/interfaces/IChannel';

const CHANNELS: IChannel[] = [
  {
    //https://a6.radioheart.ru:9021/RH16706'
    id: 1,
    attributes: {
      order: 1,
      name: 'lubimka',
      title: 'lubimka',
      subtitle: 'lubimka',
      description: 'lubimka',
      stream: {
        port: 9021,
        code: 'RH16706',
        user: '',
        baseURL: 'https://a6.radioheart.ru',
      },
    },
  },
];

export default CHANNELS;
