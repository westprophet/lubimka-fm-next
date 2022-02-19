export default function isValidIIcon(d: any): boolean {
  const isValid = 'className' in d && 'type' in d && 'svg' in d;
  if (!isValid) console.error('isValidIIcon: no-valid:', d);
  return isValid;
}
