import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { SELECTOR } from './index.styled';
import { statusOptions } from './constants';
import { setLanguageActions } from '../../redux/services/languageSlice';

export const Language = () => {
  const dispatch = useDispatch();
  const localLen = localStorage.getItem('Language');
  if (!localLen) localStorage.setItem('Language', 'EN');

  const LangOptionsClick = e => {
    dispatch(setLanguageActions(e.target.value));
    localStorage.setItem('Language', e.target.value);
  };

  useEffect(() => {
    dispatch(setLanguageActions(localLen));
  }, [dispatch, localLen]);

  const arrOpt = [];
  Object.keys(statusOptions).map(opt =>
    opt === localLen ? arrOpt.unshift(opt) : arrOpt.push(opt)
  );

  return (
    <SELECTOR onChange={LangOptionsClick}>
      {arrOpt.map(opt => (
        <option key={opt} value={opt}>
          {statusOptions[opt]}
        </option>
      ))}
    </SELECTOR>
  );
};

export default Language;
