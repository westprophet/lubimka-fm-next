import TImageExtension from 'src/types/TImageExtension';

export default interface IStrapiImage {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: any; //**;
  hash: string;
  ext: TImageExtension;
  mime: 'image/png' | 'image/jpeg';
  size: number;
  url: string;
  previewUrl: string;
  provider: 'local' | 'aws-s3';
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
}
