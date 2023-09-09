import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotFoundBlock } from '../../components';

const NotFoundPage = () => {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (redirect) {
      navigate('/');
    }
  }, [redirect]);

  return (
    <>
      <NotFoundBlock />
    </>
  );
};

export default NotFoundPage;
