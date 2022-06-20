import * as channels from './strapi/routes/channels';
import * as companies from './strapi/routes/companies';
import * as authors from './strapi/routes/authors';
import * as events from './strapi/routes/events';
import * as clubs from './strapi/routes/clubs';
import * as partners from './strapi/routes/partners';
import * as team from './strapi/routes/team';
import * as programs from './strapi/routes/programs';
import * as requisitions from './strapi/routes/requisitions';
import * as faq from './strapi/routes/faq';

import * as stream from './radioheathAPI/routes/stream';
import * as image from './radioheathAPI/routes/image';
import * as tracks from './radioheathAPI/routes/tracks';

import * as single from './strapi/routes/single';

const strapi = {
  channels,
  companies,
  authors,
  events,
  clubs,
  partners,
  team,
  programs,
  single,
  faq,
  requisitions,
};

const radio = {
  stream,
  image,
  tracks,
};

export { strapi, radio };

export default { strapi, radio };
