export default function isFrontendEnvironment() {
  return typeof window !== 'undefined';
}
