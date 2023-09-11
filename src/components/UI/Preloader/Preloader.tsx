import React from 'react';
import s from './Preloader.module.scss';

/**
 * Preloader компонент для відображення завантажувача.
 * @param {boolean} withContainer - Чи використовувати контейнер.
 */

interface IPreloaderProps {
  withContainer?: boolean;
}

const Preloader: React.FC<IPreloaderProps> = ({ withContainer }) => (
  <div className={withContainer ? 'container' : ''}>
    <div className={s.lds_ellipsis}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
);
export default Preloader;
