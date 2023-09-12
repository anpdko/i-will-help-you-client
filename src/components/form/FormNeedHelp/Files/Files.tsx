import { FileInput } from '@components/UI';
import { PaperClipIcon } from '@components/icons/PaperClipIcon';
import s from './Files.module.scss';

const Files = () => {
  return (
    <div className={s.files}>
      <FileInput
        name='files'
        title='Upload Files'
        placeholderIcon={<PaperClipIcon />}
        placeholderText='Upload your files here'
        accept='image/*, .pdf, .txt, .doc, .docx, .xml'
        multiple={true}
        classNameContainer={s.files__input}
      />
      <p className={s.files__text}>
        Supported file formats: jpg, pdf, txt, dox, docx, xml.
      </p>
      <p className={s.files__text}>You can upload files up to 10MB.</p>
    </div>
  );
};

export default Files;
