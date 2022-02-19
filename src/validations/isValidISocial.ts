export default function isValidISocial(d: any): boolean {
  const isValid = 'title' in d && 'url' in d && 'icon' in d;
  if (!isValid) console.error('isValidISocial: no-valid:', d);
  return isValid;
}
