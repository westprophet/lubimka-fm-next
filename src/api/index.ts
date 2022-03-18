import * as channels from './strapi/routes/channels';
import * as companies from './strapi/routes/companies';

import * as stream from './radioheathAPI/routes/stream';
import * as image from './radioheathAPI/routes/image';

const strapi = {
  channels,
  companies,
};

const radio = {
  stream,
  image,
};

export { strapi, radio };

export default { strapi, radio };
