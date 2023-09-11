import React from 'react';
import s from './Preloader.module.scss';

interface IPreloaderProps {
  container?: boolean;
}

const Preloader: React.FC<IPreloaderProps> = ({ container }) => {

  if (container) {
    return (
      <div className='container'>
        <div className={s.lds_ellipsis}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  }

  return (
    <div className={s.lds_ellipsis}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Preloader;
