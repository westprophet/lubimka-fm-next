//Проверяем сущность ICompany
export default function isValidICompany(d: any): boolean {
  // const isValid = 'Title' in d && 'Subtitle' in d && 'Socials' in d && Array.isArray(d.Socials);
  const isValid = 'Title' in d && 'Subtitle' in d && 'Socials' in d;
  if (!isValid) console.error('isValidICompany: no-valid:', d);

  return isValid;
}
