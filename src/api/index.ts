import * as channels from './strapi/routes/channels';
import * as companies from './strapi/routes/companies';
import * as stream from './radioheathAPI/routes/stream';

const strapi = {
  channels,
  companies,
};

const radio = {
  stream,
};

export { strapi, radio };
