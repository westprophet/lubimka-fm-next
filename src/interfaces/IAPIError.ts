export default interface IAPIError {
  status: 404 | number;
  name: 'NotFoundError';
  message: 'Not Found';
  details: {};
}
