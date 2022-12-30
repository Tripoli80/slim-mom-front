import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  NotFoundWrap,
  NotFoundTitle,
  Error,
  Text,
  NavItem,
} from './NotFoundStyled';
import { Image, Image2 } from 'components/App/App.stiled';

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
    <NotFoundWrap>
      <Image />
      <Image2 />
      <Error>404</Error>
      <NotFoundTitle>Page not found</NotFoundTitle>
      <Text>{<NavItem to="/">Go back to the main page</NavItem>}</Text>

      <Text>
        <>{`You will be automatically redirected to the main page in ${time} seconds`}</>
      </Text>
    </NotFoundWrap>
  );
};

export default NotFoundView;
