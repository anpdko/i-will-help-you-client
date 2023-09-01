import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReviews } from '../../../store/reviews/reviewsSlice';
import { AppDispatch, RootState } from '../../../store/store';

import s from './ReviewsAdminPage.module.scss';

const API_URL = import.meta.env.VITE_API_URL;

const ReviewsAdminPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { reviews, loading, message } = useSelector(
    (state: RootState) => state.reviews,
  );

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

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
              <th>ID</th>
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
                <td>{review._id}</td>
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
                <td>{new Date(review.updated_date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReviewsAdminPage;
