import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { google } from 'redux/auth/authSlice';

const GoogleRegistration = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const googleToken = searchParams.get('token');
  const googleLongToken = searchParams.get('longtoken');
  const googleUsername = searchParams.get('username');
  const googleUserEmail = searchParams.get('email');

  //рефреш для получение данных

  dispatch(
    google({
      token: googleToken,
      longtoken: googleLongToken,
      user: {
        username: googleUsername,
        email: googleUserEmail,
      },
    })
  );
  // const { user } = useSelector(store => store.auth);
};

export default GoogleRegistration;
