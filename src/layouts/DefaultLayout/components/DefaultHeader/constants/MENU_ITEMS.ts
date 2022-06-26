import IHeaderMenuItem from '../interfaces/IHeaderMenuItem';

const MENU_ITEMS: IHeaderMenuItem[] = [
  {
    title: 'Эфир',
    link: '/broadcast',
    key: 'broadcast',
    // getLink: (channelID: string) => {
    //   return `/broadcast/${channelID}`;
    // },
  },
  {
    title: 'Club Life',
    link: '/club-life',
    key: 'club-life',
  },
  {
    title: "Lubimka Dj's",
    link: '/lubimka-djs',
    key: 'lubimka-djs',
  },
  {
    title: 'Новости',
    link: '/news',
    key: 'news',
  },
  {
    title: 'Реклама',
    link: '/advertising/order',
    key: 'advertising/order',
  },
  {
    title: 'О нас',
    link: '/about-us',
    key: 'about-us',
  },
  {
    title: 'Контакты',
    link: '/contact-us',
    key: 'contact-us',
  },
  {
    title: 'FAQ',
    link: '/faq',
    key: 'faq',
  },
];
export default MENU_ITEMS;
