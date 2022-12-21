import { useDispatch } from 'react-redux';
import { SELECTOR } from './index.styled';
// import { Translator } from './translator';
import { statusOptions } from './constants';
import { setLanguageActions } from '../../redux/services/languageSlice';

export const Language = () => {
  const dispatch = useDispatch();

  const LangOptionsClick = e => {
    dispatch(setLanguageActions(e.target.value));
    localStorage.setItem('Language', e.target.value);
  };

  const localLen = localStorage.getItem('Language');
  if (localLen) {
    dispatch(setLanguageActions(localLen));
  } 

  let arr = [];
  for (let key in statusOptions) {
    if (key === localLen) {
      arr.unshift(statusOptions[key]);
    } else arr.push(statusOptions[key]);
  }

  return (
    <SELECTOR onChange={LangOptionsClick}>
      {arr.map(opt => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </SELECTOR>
  );
};

export default Language;
