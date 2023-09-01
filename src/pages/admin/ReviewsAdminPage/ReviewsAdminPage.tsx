import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteReview,
  getReviews,
  // updateReview,
} from '../../../store/reviews/reviewsSlice';
import { AppDispatch, RootState } from '../../../store/store';

import { MdOutlineUpdate } from 'react-icons/md';
import { BsFillTrashFill } from 'react-icons/bs';

import s from './ReviewsAdminPage.module.scss';
import TableReviewsAdmin from './TableReviewsAdmin';
import { NavbarControlAdmin } from '../../../components/admin'

const ReviewsAdminPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { reviews, loading, message } = useSelector(
    (state: RootState) => state.reviews,
  );

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  const handleDeleteReview = (reviewId: string) => {
    dispatch(deleteReview(reviewId));
  };
  // const handleUpdateReview = (reviewId: string, updatedData: any) => {
  //   dispatch(updateReview({ reviewId, updatedData }));
  // };
  return (
    <div className={s.reviews_admin_page}>
      {loading ? (
        <p>Loading...</p>
      ) : message ? (
        <p>{message}</p>
      ) : (
        <table className={s.reviews_table}>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Job</th>
              <th>Title</th>
              <th>Body</th>
              <th>Published Date</th>
              <th>Updated Date</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => (
              <tr key={review._id}>
                <td>
                  <img
                    src={API_URL + '/static/images/reviews/' + review.foto}
                    alt='photo'
                  />
                </td>
                <td>{review.translations[0]?.name}</td>
                <td>{review.translations[0]?.job}</td>
                <td>{review.translations[0]?.title}</td>
                <td>{review.translations[0]?.body}</td>
                <td>{new Date(review.published_date).toLocaleDateString()}</td>
                <td>
                  <button
                    className={s.update_btn}
                    // onClick={() => handleUpdateReview(review._id, updatedData)}
                  >
                    <MdOutlineUpdate className={s.icon} />
                  </button>
                  <button
                    className={s.delete_btn}
                    onClick={() => handleDeleteReview(review._id)}
                  >
                    <BsFillTrashFill className={s.icon} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReviewsAdminPage;
