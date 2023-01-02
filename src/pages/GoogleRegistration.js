import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { refreshUser } from 'redux/auth/authOperations';
import { useEffect } from 'react';
import { google } from 'redux/auth/authSlice';

const GoogleRegistration = () => {
  const [searchParams] = useSearchParams();
  const googleToken = searchParams.get('token');
  const googleLongToken = searchParams.get('longtoken');
  const googleUsername = searchParams.get('username');
  const googleUserEmail = searchParams.get('email');
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
};

export default GoogleRegistration;
