//Проверяем сущность IAuthor
export default function isValidIAuthor(d: any): boolean {
  const inner = 'attributes' in d ? d.attributes : null;
  const isValid =
    'name' in inner && 'description' in inner && 'Socials' in inner && 'avatar' in inner;
  if (!isValid) console.error('isValidIAuthor: no-valid:', d);
  return isValid;
}
