import { RxCopy } from 'react-icons/rx';
import s from './PaymentBlock.module.scss';

interface InvoicePaymentProps {
  list: { title: string; account: string }[];
  method?: string;
}

const InvoicePayment = ({ list, method }: InvoicePaymentProps) => {
  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  return (
    <div className={`border-style ${s.invoice}`}>
      <ul className={s.invoice__list}>
        {list.map((item) => (
          <li key={item.title} className={`border-style ${s.invoice__item}`}>
            <div className={s.invoice__info}>
              <h3 className={s.invoice__title}>{item.title}</h3>
              <p className={s.invoice__account}>{item.account}</p>
            </div>
            <button
              className={s.invoice__btn}
              onClick={() => handleCopy(item.account)}
            >
              Copy <RxCopy />
            </button>
          </li>
        ))}
      </ul>
      {method === 'transfer' && (
        <>
          <p>
            <span className={s.invoice__SWIFT}>SWIFT</span>: WBKPPLPP
          </p>
          <p>Santander Bank Polska S.A</p>
        </>
      )}
    </div>
  );
};

export default InvoicePayment;
