import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { SELECTOR } from './index.styled';
import { statusOptions } from './constants';
import { setLanguageActions } from '../../redux/services/languageSlice';

export const Language = () => {
  const dispatch = useDispatch();
  const localLen = localStorage.getItem('Language');

  const LangOptionsClick = e => {
    dispatch(setLanguageActions(e.target.value));
    localStorage.setItem('Language', e.target.value);
  };

  useEffect(() => {
    dispatch(setLanguageActions(localLen));
  }, [dispatch, localLen]);

  return (
    <SELECTOR onChange={LangOptionsClick}>
      {Object.keys(statusOptions).map(opt =>
        opt === localLen ? (
          <option key={opt} value={opt} selected>
            {statusOptions[opt]}
          </option>
        ) : (
          <option key={opt} value={opt}>
            {statusOptions[opt]}
          </option>
        )
      )}
    </SELECTOR>
  );
};

export default Language;
