import s from './ReviewsAdminPage.module.scss';
import TableReviewsAdmin from './TableReviewsAdmin';
import { NavbarControlAdmin } from '../../../components/admin'

const ReviewsAdminPage = () => {
  return (
    <div className={s.reviews_admin_page}>
      <NavbarControlAdmin/>
      <TableReviewsAdmin />
    </div>
  );
};

export default ReviewsAdminPage;
