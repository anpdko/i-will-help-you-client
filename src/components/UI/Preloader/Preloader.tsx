import React from 'react';

import s from './Preloader.module.scss';

const Preloader: React.FC = () => {
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
