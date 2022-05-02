import * as channels from './strapi/routes/channels';
import * as companies from './strapi/routes/companies';
import * as authors from './strapi/routes/authors';
import * as events from './strapi/routes/events';
import * as clubs from './strapi/routes/clubs';
import * as partners from './strapi/routes/partners';
import * as team from './strapi/routes/team';

import * as stream from './radioheathAPI/routes/stream';
import * as image from './radioheathAPI/routes/image';
import * as tracks from './radioheathAPI/routes/tracks';

const strapi = {
  channels,
  companies,
  authors,
  events,
  clubs,
  partners,
  team,
};

const radio = {
  stream,
  image,
  tracks,
};

export { strapi, radio };

export default { strapi, radio };
