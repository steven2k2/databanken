export function uppercase(str) {
  if (!str) return '';
  return str.toUpperCase();
}

export function lowercase(str) {
  if (!str) return '';
  return str.toLowerCase();
}

export function truncate(str, len) {
  if (!str) return '';
  if (str.length > len) {
    return str.substring(0, len) + '...';
  }
  return str;
}

export function address(address) {
  if (!address || typeof address !== 'object') return '';
  const { street, city, region, postalCode, country } = address;

  return [street, city, region, postalCode, country]
    .filter(Boolean) // Remove empty values
    .join(', ');
}