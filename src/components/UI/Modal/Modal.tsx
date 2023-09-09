import React, { useEffect } from 'react';
import s from './Modal.module.scss';
import sprite from '../../../assets/sprite.svg';

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
  className?: string;
  size?: 'smaller' | 'small' | 'large';
}

const Modal = ({
  children,
  className,
  size = 'smaller',
  onClose,
}: ModalProps) => {
  const onBackdropClose = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const onEscapeClose = (event: any) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscapeClose);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
      window.removeEventListener('keydown', onEscapeClose);
    };
  }, [onClose]);

  return (
    <>
      <div className={s.overlay} onClick={onBackdropClose}>
        <div className={'container'}>
          <div className={[s.overlay__modal, s[size], className].join(' ')}>
            {' '}
            <button
              type='button'
              className={s.overlay__modal_button}
              onClick={onClose}
            >
              <svg>
                <use href={sprite + '#cross'} />
              </svg>
            </button>
            <div className={s.overlay__modal_content}>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
