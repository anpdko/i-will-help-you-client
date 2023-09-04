export const generateSocialMediaLink = (
  network: string,
  networkLogo: string,
): string | null => {
  const normalizedNetwork = network.startsWith('@')
    ? network.slice(1)
    : network;

  switch (networkLogo.toLowerCase()) {
    case 'telegram':
      return `https://t.me/${normalizedNetwork}`;
    case 'viber':
      return `viber://add?number=${normalizedNetwork}`;
    case 'facebook':
      return `https://www.facebook.com/${normalizedNetwork}`;
    case 'instagram':
      return `https://www.instagram.com/${normalizedNetwork}`;
    default:
      return null;
  }
};
