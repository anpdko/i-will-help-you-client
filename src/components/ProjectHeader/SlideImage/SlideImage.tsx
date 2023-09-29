import React from 'react';

import s from './SlideImage.module.scss';
import { LazyImage } from '@/components';

interface ISlideImageProps {
  imgCover: string;
  title: string;
}

const SlideImage: React.FC<ISlideImageProps> = ({ imgCover, title }) => {
  return (
    <div className={s.image}>
      <LazyImage src={imgCover} alt={title} />
    </div>
  );
};

export default SlideImage;
