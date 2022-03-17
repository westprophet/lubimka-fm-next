import IChannel from 'src/interfaces/IChannel';

const CHANNELS: IChannel[] = [
  {
    //https://a6.radioheart.ru:9021/RH16706'
    id: 1,
    attributes: {
      order: 1,
      name: 'Lubimka',
      title: 'Lubimka',
      subtitle: 'Lubimka',
      description: 'Lubimka',
      locale: 'en',
      cover: null,
      stream: {
        port: 9021,
        code: 'RH16706',
        user: 'user8021',
        baseURL: 'https://a6.radioheart.ru',
      },
    },
  },
  {
    id: 2,
    attributes: {
      order: 2,
      name: 'Lubimka Hits',
      title: 'lubimka Hits',
      subtitle: 'lubimka Hits',
      locale: 'en',
      cover: null,
      description:
        'Они не возвращаются. Потому что не уходят.\n' +
        'Они узнаваемы и громко, и тихо.\n' +
        'Они – звучат у нас.\n' +
        'Хиты всех времён! - lubimka Hits',
      stream: {
        port: 8022,
        code: 'RH31504',
        user: 'user8022',
        baseURL: 'https://a6.radioheart.ru',
      },
    },
  },
];

export default CHANNELS;
