import { useState, useEffect } from 'react';
import s from './AuthAdminPage.module.scss';
import ButtonApp from '../../../components/UI/ButtonApp/ButtonApp';

import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../store/store';
import { adminLogin, clearMessage } from '../../../store/admin/adminSlice.ts';

interface IData {
  login: string;
  password: string;
}

const initialUser:IData = {
  login: '',
  password: '',
};

const AuthAdminPage = () => {
  const [user, setUser] = useState(initialUser);
  const [error, setError] = useState(initialUser);

  const { loading, message } = useSelector((state: RootState) => state.admin);
  const dispatch = useDispatch<AppDispatch>();

  const handleUserChange = (event: any) => {
    setUser({...user, [event.target.name]: event.target.value})
    setError({...error, [event.target.name]: ""})
    dispatch(clearMessage());
  };

  useEffect(() => {
    if(typeof message === 'object'){
      if(message?.login){
        setError({...error, login:message?.login})
        return;
      }
      if(message?.password){
        setError({...error, password:message?.password})
        return;
      }
    }
  }, [message])


  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (!user.login) {
      setError({...error, login:'Заповніть всі поля'});
      return;
    }
    if (!user.password) {
      setError({...error, password:'Заповніть всі поля'});
      return;
    }

    dispatch(adminLogin(user));
    setError(initialUser);
  };

  if(loading) {
    return <h1>...</h1>
  }

  return (
    <div className={s.auth}>
      <div className={s['form-container']}>
        <h1 className='bunner-title'>Вхід в адмін панель</h1>

        <form className={s.form} action='' method='' onSubmit={handleSubmit}>
          <input
            className={s.input}
            type='text'
            name='login'
            placeholder='Логін'
            value={user.login}
            onChange={handleUserChange}
          />
          {error.login && <p className={s.error}>{error.login}</p>}

          <input
            className={s.passwordInput}
            type='password'
            name='password'
            placeholder='Пароль'
            value={user.password}
            onChange={handleUserChange}
          />
          {error.password && <p className={s.error}>{error.password}</p>}
          <ButtonApp
            className={s.submit}
            type='submit'
            color='orange'
            size='medium'
          >
            Вхід
          </ButtonApp>
        </form>
      </div>
    </div>
  );
};
export default AuthAdminPage;
