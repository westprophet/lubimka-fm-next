
export default function isEmptyString(s: string | any): boolean {
  return !(typeof s === 'string' && s.length);
}
