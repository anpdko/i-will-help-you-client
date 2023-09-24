import React, { useEffect, useState } from 'react';
import s from './Modal.module.scss';
import sprite from '@assets/sprite.svg';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  title?: string | React.ReactNode;
  onClose: () => void;
  className?: string;
  size?: 'smaller' | 'small' | 'large';
}

const Modal = ({
  children,
  className,
  title = 'Modal',
  size = 'smaller',
  onClose,
}: ModalProps) => {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const modalRootElement = document.querySelector('#modal-root');
    if (modalRootElement) {
      setModalRoot(modalRootElement as HTMLElement);
    }
  }, []);

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

  return modalRoot
    ? createPortal(
        <>
          <div className={s.overlay} onClick={onBackdropClose}>
            <div className={[s.overlay__modal, s[size], className].join(' ')}>
              <div className={s.header}>
                <div className={s.title}>{title}</div>
                <button type='button' className={s.button} onClick={onClose}>
                  <svg width={24} height={24}>
                    <use href={sprite + '#cross'} />
                  </svg>
                </button>
              </div>
              <div className={s.content}>{children}</div>
            </div>
          </div>
        </>,
        modalRoot,
      )
    : null;
};

export default Modal;
