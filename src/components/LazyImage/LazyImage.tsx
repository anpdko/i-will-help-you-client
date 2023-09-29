import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

interface LazyImageProps {
  src: string;
  alt: string | undefined;
  className?: string;
  effect?: string;
}

const API_URL = import.meta.env.VITE_API_URL;

const LazyImage = ({ src, alt, className }: LazyImageProps) => {
  const [imagePath, setImagePath] = useState<string | null>(null);

  useEffect(() => {
    //Перевірка підтримки формату браузером
    const supportsWebP = () => {
      const webpSupported = document
        .createElement('canvas')
        .toDataURL('image/webp')
        .startsWith('data:image/webp');
      return webpSupported;
    };

    //Перевірка наявності формату вебп за шляхом
    const checkWebPFileExists = async () => {
      const webpFilePath = `${src.replace(/\.[a-z]+$/i, '')}.webp`;

      try {
        const response = await fetch(webpFilePath);
        if (response.status === 200) {
          return true;
        }
      } catch (error) {
        return false;
      }
      return false;
    };

    //Завантаження відповідного формату
    const loadImage = async () => {
      const webpSupported = supportsWebP();
      const webpFileExists = await checkWebPFileExists();

      const imageFormat = webpSupported && webpFileExists ? 'webp' : 'jpg';

      // Шлях до зображення
      const formattedPath = `${src.replace(/\.[a-z]+$/i, '')}.${imageFormat}`;
      const finalImagePath = `${API_URL}${formattedPath}`;
      setImagePath(finalImagePath);
    };

    loadImage();
  }, [src]);

  return imagePath ? (
    <LazyLoadImage
      effect='blur'
      className={className}
      src={imagePath}
      alt={alt}
    />
  ) : (
    <></>
  );
};

export default LazyImage;
