//Создает произвольную строку с набором символов
export default function createRandomID(len: number) {
  const str = '1234567890-qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  const strLen = str.length;
  let res = '';
  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * strLen);
    res += str[randomIndex];
  }
  return res;
}
