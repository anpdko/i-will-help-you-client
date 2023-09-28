// import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ButtonApp } from '@/components/UI';
import successImage from '@assets/image/completionImages/success.png';
import failureImage from '@assets/image/completionImages/failure.png';
import s from './Completion.module.scss';

function Completion() {
  // const { getValues } = useFormContext();
  // const donationAmount = getValues('donationAmount');
  const navigate = useNavigate();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const redirectStatus = urlParams.get('redirect_status');
  const success: boolean = redirectStatus === 'succeeded';

  const handleClick = () => {
    if (!success) {
      navigate('/donate');
    }
    navigate('/projects');
  };

  return (
    <section className={s.completionWrapper}>
      <div className='container'>
        <h1 className='heading1'>{success ? 'Thank you!' : 'Failure!'}</h1>
        <div className={s.completionImageWrapper}>
          <img
            src={success ? successImage : failureImage}
            alt={
              success
                ? 'Hugs after successful help'
                : "The girl's upset about the problems"
            }
          />
        </div>
        {/* <p className={s.completionAmount}>
          {success ? '\u0024100' : 'Oh no...'}
        </p> */}
        {/* <p className={s.completionAmount}>{success && donationAmount ? '\u0024' + `${donationAmount}` : 'Oh no...'}</p> */}
        <p className='text'>
          {success
            ? 'Your donation was successful! We appreciate your help!'
            : 'We are sorry, but something went wrong! Please, try again!'}
        </p>
        <ButtonApp className={s.completionButton} onClick={handleClick}>
          {success ? 'Cool!' : 'Try again'}
        </ButtonApp>
      </div>
    </section>
  );
}

export default Completion;
