import s from './SheetsAdminPage.module.scss';
import { NavbarControlAdmin } from '../../../components/admin';
import { ButtonApp } from '../../../components/UI';

const SheetsAdminPage = () => {
  return (
    <div className={s.sheets}>
      <NavbarControlAdmin />
      <ul className={s.list}>
        <li>
          <ButtonApp
            className={s.submit}
            type='link'
            blank={true}
            color='white'
            to='https://docs.google.com/spreadsheets/d/1LQtsfWPa0mnnOz1gteBJnvTmXLR5xctfmN-Fk6mcIIs/edit#gid=1830970884'
            size='medium'
          >
            Google sheets Volunteers
          </ButtonApp>
        </li>
        <li>
          <ButtonApp
            className={s.submit}
            type='link'
            blank={true}
            color='white'
            to='https://docs.google.com/spreadsheets/d/1g4cRebKenbQy5CUXUzbqlcUmUTUbioLD3xeCfqTkit0/edit#gid=0'
            size='medium'
          >
            Google sheets Need Helps
          </ButtonApp>
        </li>
      </ul>
    </div>
  );
};
export default SheetsAdminPage;
