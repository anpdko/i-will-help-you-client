import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';
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
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    if (imagePath) {
      setLoading(false);
    }
  }, [imagePath]);

  return (
    <div className={`lazy-image ${loading ? 'loading' : ''}`}>
      {imagePath && (
        <LazyLoadImage
          effect='blur'
          className={className}
          src={imagePath}
          alt={alt}
        />
      )}
      <SkeletonTheme
        borderRadius='2rem'
        baseColor='#eee'
        duration={5}
        highlightColor='#E5E5E5'
      >
        <Skeleton className='skeleton' />
      </SkeletonTheme>
    </div>
  );
  //  imagePath ? (
  //   <LazyLoadImage
  //     effect='blur'
  //     className={className}
  //     src={imagePath}
  //     alt={alt}
  //   />
  // ) : (
  //   <SkeletonTheme baseColor='#d9d9d9' highlightColor='#505050'>
  //     <Skeleton className='skeleton' />
  //   </SkeletonTheme>
  // );
};

export default LazyImage;
