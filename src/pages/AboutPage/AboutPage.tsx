import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ButtonApp from '../../components/UI/ButtonApp/ButtonApp';
import Modal from '../../components/UI/Modal/Modal';
import ModalSuccess from '../../components/ModalSuccess/ModalSuccess';
import { Volunteer, AboutHeader } from '../../components';

const AboutPage = () => {
  const { t } = useTranslation();

  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal((isOpenModal) => !isOpenModal);
  };

  return (
    <>
      <section>
        <div className='container'>
          <h1>About</h1>
          <ButtonApp onClick={toggleModal}>{t('Button Modal')}</ButtonApp>
          {isOpenModal && (
            <Modal onClose={toggleModal}>
              <ModalSuccess onClose={toggleModal}/>
            </Modal>
          )}
        </div>
      </section>
      <AboutHeader />
      <Volunteer />
    </>
  );
};
export default AboutPage;
