import { useState } from 'react';
import s from './InputAuthorization.module.scss';

const InputAuthorization = () => {
  const myLogin = 'hojshju';
  const myPass = 'aslnalsnl';

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginTouched, setLoginTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
    setLoginTouched(true);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordTouched(true);
  };

  const handleSubmit = (event) => {
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
        {loginTouched && error && <p className={s.error}>{error}</p>}

        <input
          className={s.passwordInput}
          type='password'
          name='password'
          placeholder='Пароль'
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordTouched && error && <p className={s.error}>{error}</p>}
        <button className={s.button} type='submit'>
          Вхід
        </button>
      </form>
    </div>
  );
};

export default InputAuthorization;
