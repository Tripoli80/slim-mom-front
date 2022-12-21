import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import * as authOperations from '../../redux/auth/authOperations';
import { Translator } from 'components/language/translator';

// нижче заглушка треба переписати

const ResponsiveAppBar = () => {
  const isloggedIn = useSelector(state => state.auth.isLoggedIn);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCloseNavMenu = e => navigate(e.currentTarget.dataset.link);

  const logout = () => {
    dispatch(authOperations.logOut());
  };
  const Langu = ({ name }) => {
    return Translator(name);
  };

  return (
    <>
      {!isloggedIn && (
        <button
          data-link="/"
          data-name="Home Page"
          key="Home Page"
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {<Langu name="calculateYourDaily" />}
        </button>
      )}

      {isloggedIn && (
        <button
          data-link="/"
          data-name="Logout"
          key="Logout"
          onClick={logout}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {<Langu name="logout" />}
        </button>
      )}
    </>
  );
};
export default ResponsiveAppBar;
