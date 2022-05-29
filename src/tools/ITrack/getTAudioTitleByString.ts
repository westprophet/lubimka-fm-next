//Получение названия и автора по имени
export default function getTAudioTitleByString(s: string | null | undefined) {
  if (!s) return null;
  const temp = s
    .replace(/&#039;/gi, "'")
    .replace(/&amp;/gi, 'feat.')
    .replace(/&quot;/gi, '"')
    .split(/ - /);
  return {
    artist: temp[0],
    title: temp[1],
  };
}
