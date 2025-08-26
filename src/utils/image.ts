export function getImageOrPlaceholder(url?: string) {
  return url ? { uri: url } : require('../assets/images/placeholder.png');
}
