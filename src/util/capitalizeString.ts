export function capitalizeString(str: string): string {
  const lowerCasedString = str.toLowerCase();
  const capitalizedString = lowerCasedString[0].toUpperCase() + lowerCasedString.slice(1);
  return capitalizedString;
}
