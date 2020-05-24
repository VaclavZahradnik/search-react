export function getKeywords(text) {
  return (text || '')
    .trim()
    .replace(/\s+/g, ' ')
    .split(' ')
    .filter(x => x.length >= 3);
}
