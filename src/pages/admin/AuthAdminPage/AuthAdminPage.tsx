import { useState } from 'react';
import s from './AuthAdminPage.module.scss';
import ButtonApp from '../../../components/UI/ButtonApp/ButtonApp';

const AuthAdminPage = () => {
  const myLogin = 'hojshju';
  const myPass = 'aslnalsnl';

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginChange = (event: any) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!login || !password) {
      setError('Заповніть всі поля');
      return;
    }

    if (login !== myLogin || password !== myPass) {
      setError('Помилка');
      return;
    }
    setError('');
  };

  return (
    <div className={s.auth}>
      <div className={s['form-container']}>
        <h1 className={s.title}>Вхід в адмін панель</h1>
        <form className={s.form} action='' method='' onSubmit={handleSubmit}>
          <input
            className={s.input}
            type='text'
            name='login'
            placeholder='Логін'
            value={login}
            onChange={handleLoginChange}
          />
          {error && <p className={s.error}>{error}</p>}

          <input
            className={s.passwordInput}
            type='password'
            name='password'
            placeholder='Пароль'
            value={password}
            onChange={handlePasswordChange}
          />
          {error && <p className={s.error}>{error}</p>}
          <ButtonApp type='submit'>
            Вхід
          </ButtonApp>
        </form>
      </div>
    </div>
  );
};
export default AuthAdminPage;
