import { useMediaQuery } from 'react-responsive';
import ReviewsDesktop from './ReviewsDesktop/ReviewsDesktop';
import ReviewsMobile from './ReviewsMobile/ReviewsMobile';

const Reviews = () => {
  const isMobile = useMediaQuery({ maxWidth: 991 });

  return (
    <section>
      <div className='container'>
        <h2 className='heading1'>Stories of Hope and Gratitude</h2>
        {isMobile ? <ReviewsMobile /> : <ReviewsDesktop />}
      </div>
    </section>
  );
};

export default Reviews;
