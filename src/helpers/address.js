/**
 * Formats an address object into a single-line string.
 *
 * @param {Object} address - The address object.
 * @param {string} [address.street] - The street name and number.
 * @param {string} [address.city] - The city name.
 * @param {string} [address.region] - The region or state.
 * @param {string} [address.postalCode] - The postal or ZIP code.
 * @param {string} [address.country] - The country name.
 * @returns {string} The formatted single-line address.
 */
export default function address (address) {
  if (!address || typeof address !== 'object') return ''
  const { street, city, region, postalCode, country } = address

  return [street, city, region, postalCode, country]
    .filter(Boolean) // Remove empty values
    .join(', ')
}
