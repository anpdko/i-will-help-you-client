import s from './ModalSuccess.module.scss';
import ButtonApp from '../UI/ButtonApp/ButtonApp';

interface SuccessProps {
  onClose: () => void;
  className?: string;
}

const ModalSuccess = ({ onClose }: SuccessProps) => {
  return (
    <>
      <div className={s.success}>
        <ButtonApp onClick={onClose}>Payment success!</ButtonApp>
      </div>
    </>
  );
};

export default ModalSuccess;
