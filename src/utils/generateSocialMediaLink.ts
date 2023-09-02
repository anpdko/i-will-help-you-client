export const generateSocialMediaLink = (
  network: string,
  networkLogo: string,
): string | null => {
  switch (networkLogo.toLowerCase()) {
    case 'telegram':
      return `https://t.me/${network}`;
    case 'viber':
      return `viber://add?number=${network}`;
    case 'facebook':
      return `https://www.facebook.com/${network}`;
    case 'instagram':
      return `https://www.instagram.com/${network}`;
    default:
      return null;
  }
};
