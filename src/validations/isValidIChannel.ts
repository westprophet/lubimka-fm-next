// isValidIChannel validator
export default function isValidIChannel(d: any): boolean {
  const isValid =
    'name' in d &&
    'description' in d &&
    'subtitle' in d &&
    'order' in d &&
    'stream' in d &&
    'programs' in d &&
    'title' in d;
  if (!isValid) console.error('isValidIChannel: no-valid:', d);
  return isValid;
}
