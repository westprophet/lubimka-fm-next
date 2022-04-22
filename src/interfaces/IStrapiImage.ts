import TImageExtension from 'src/types/TImageExtension';
import TStrapiResponseContainer from '../api/strapi/types/TStrapiResponseContainer';

export default interface IStrapiImage {
  name?: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: any; //**;
  hash?: string;
  ext?: TImageExtension;
  mime?: 'image/png' | 'image/jpeg';
  size?: number;
  url: string;
  previewUrl?: string;
  provider?: 'local' | 'aws-s3';
  provider_metadata?: null;
  createdAt?: string;
  updatedAt?: string;
}

export type IWrappedStrapiImage = {
  data: TStrapiResponseContainer<IStrapiImage>;
};

export type IWrappedStrapiImages = {
  data: TStrapiResponseContainer<IStrapiImage>[];
};
