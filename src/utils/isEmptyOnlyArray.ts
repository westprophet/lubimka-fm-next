export default function isEmptyOnlyArray(d: any): boolean {
  return Array.isArray(d) && !d.length;
}
