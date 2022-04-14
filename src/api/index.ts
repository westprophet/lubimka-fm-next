import * as channels from './strapi/routes/channels';
import * as companies from './strapi/routes/companies';
import * as authors from './strapi/routes/authors';
import * as events from './strapi/routes/events';
import * as clubs from './strapi/routes/clubs';

import * as stream from './radioheathAPI/routes/stream';
import * as image from './radioheathAPI/routes/image';

const strapi = {
  channels,
  companies,
  authors,
  events,
  clubs,
};

const radio = {
  stream,
  image,
};

export { strapi, radio };

export default { strapi, radio };
