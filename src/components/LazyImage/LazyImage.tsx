import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage = ({ src, alt, className }: LazyImageProps) => {
  const [imagePath, setImagePath] = useState<string | null>(null);

  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;

    // Перевірка форматів
    const supportsFormat = async () => {
      const img = new Image();
      try {
        await img.decode();
        return true;
      } catch (error) {
        return false;
      }
    };

    const checkFormats = async () => {
      const formats = ['avif', 'webp', 'jpg', 'png', 'jpeg'];
      for (const format of formats) {
        if (await supportsFormat()) {
          return format;
        }
      }
      return 'jpg';
    };

    const loadImage = async () => {
      const imageFormat = await checkFormats();

      // Шлях до зображення
      const formattedPath = `${src.replace(/\.[a-z]+$/i, '')}.${imageFormat}`;
      const finalImagePath = `${API_URL}${formattedPath}`;
      setImagePath(finalImagePath);
    };

    loadImage();
  }, [src]);

  return imagePath ? (
    <LazyLoadImage className={className} src={imagePath} alt={alt} />
  ) : (
    <div>Loading...</div>
  );
};

export default LazyImage;
