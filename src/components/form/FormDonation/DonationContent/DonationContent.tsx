import s from './DonationContent.module.scss';

interface DonationDesc {
  title: string;
  text: string;
  children: React.ReactNode;
}

const DonationContent = ({ title, text, children }: DonationDesc) => {
  return (
    <section className={s.donation__content}>
      <div className={`border-style ${s.donation__wrapper}`}>
        <h3 className={s.donation__title}>{title}</h3>
        <p className={s.donation__text}>{text}</p>
      </div>
      {children}
    </section>
  );
};

export default DonationContent;