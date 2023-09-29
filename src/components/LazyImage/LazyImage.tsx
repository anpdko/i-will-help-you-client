import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface LazyImageProps {
  src: string;
  alt: string | undefined;
  className?: string;
}

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
      const finalImagePath = `${formattedPath}`;
      setImagePath(finalImagePath);
    };

    loadImage();
  }, [src]);

  return imagePath ? (
    <LazyLoadImage className={className} src={imagePath} alt={alt} />
  ) : (
    <></>
  );
};

export default LazyImage;
