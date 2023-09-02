import s from './ReviewsAdminPage.module.scss';
import TableReviewsAdmin from './TableReviewsAdmin';
import { NavbarControlAdmin } from '../../../components/admin';

const ReviewsAdminPage = () => {
  return (
    <div className={s.reviews_admin_page}>
      <NavbarControlAdmin createLink='/admin/panel/review/create'/>
      <TableReviewsAdmin />
    </div>
  );
};

export default ReviewsAdminPage;
