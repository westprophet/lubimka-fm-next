import { IStrapiReturn } from 'api/strapi/types/index';

export interface IStrapiTrackInner {
  name: string;
  alternativeText: string;
  caption: string;
  width: null;
  height: null;
  formats: null;
  hash: string;
  ext: '.mp3';
  mime: 'audio/mpeg';
  size: number;
  url: string;
  previewUrl: null;
  provider: 'aws-s3';
  provider_metadata: null;
  createdAt: '2022-06-05T15:10:49.711Z';
  updatedAt: '2022-06-05T15:10:49.711Z';
}

export type IStrapiTrack = IStrapiReturn<IStrapiTrackInner>;
