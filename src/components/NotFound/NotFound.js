import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Translator } from 'components/language/translator';
// нижче заглушка треба переписати

const setTimer = 5;
const NotFoundView = () => {
  const [time, setTime] = useState(setTimer);

  let navigate = useNavigate();

  const ref = useRef(new Date().getTime() + setTimer * 1000);

  const timerId = useRef(
    setInterval(() => {
      setTime(Math.ceil((ref.current - Date.now()) / 1000));
    }, 1000)
  );
  useEffect(() => {
    if (time <= 0) {
      clearInterval(timerId.current);
      navigate('/');
    }
  }, [navigate, time]);


  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'wheat',
        padding: '50px',
        boxShadow: '2px 4px 8px 0px rgba(0,0,0,0.75)',
      }}
    >
      <p>
        <>
          {' '}
          {Translator('pageNotFound')},
          <Link to="/" style={{ textDecoration: 'none' }}>
            {' '}
            {Translator('goToHomepage')}
          </Link>
        </>
      </p>

      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        <>{`Redirecting in ${time} seconds`}</>
      </p>
    </div>
  );
};
export default NotFoundView;
