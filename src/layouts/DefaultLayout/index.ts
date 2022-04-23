import DefaultLayout from './DefaultLayout';
import { PageTitle, PageWrapper } from './components';
import { IDefaultLayoutAttributes } from './types';

export type { IDefaultLayoutAttributes };

export default {
  Layout: DefaultLayout,
  PageWrapper: PageWrapper,
  PageTitle: PageTitle,
};
