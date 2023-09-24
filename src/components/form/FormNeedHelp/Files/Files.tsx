import { useTranslation } from 'react-i18next';
import { FileInput } from '@components/UI';
import { BsPaperclip } from 'react-icons/bs';
import s from './Files.module.scss';

const Files = () => {
  const { t } = useTranslation();

  return (
    <div className={s.files}>
      <FileInput
        name='files'
        title={t('Upload Files')}
        placeholderIcon={<BsPaperclip size='1.5rem' />}
        placeholderText={t('Upload your files here')}
        accept='image/*, .pdf, .txt, .doc, .docx, .xml'
        multiple={true}
        classNameContainer={s.files__input}
      />
      <p className={s.files__text}>
        {t('Supported file formats: jpg, pdf, txt, dox, docx, xml.')}
      </p>
      <p className={s.files__text}>{t('You can upload files up to 10MB.')}</p>
    </div>
  );
};

export default Files;
