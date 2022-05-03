import TAudioTitle from '../../types/TAudioTitle';

export default function compareTAudioTitle(
  a: TAudioTitle | undefined | null,
  b: TAudioTitle | undefined | null
): boolean | null {
  if (!a || !b) return null;
  return a.title === b.title && b.artist === b.artist;
}
