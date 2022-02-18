export default function isEmptyArray(d: any): boolean {
  return !Array.isArray(d) || !d.length;
}
