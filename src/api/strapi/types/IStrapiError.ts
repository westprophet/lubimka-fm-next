export default interface IStrapiError {
  status: 404 | 500;
  name: 'NotFoundError' | 'InternalServerError';
  message: 'Not Found' | 'Internal Server Error';
  details?: any;
}
