import { useSelector } from 'react-redux';
import { getLanguage } from '../../redux/services/languageSlice';
import { EN } from './LanguageEn';
import { RU } from './LanguageRu';
import { UA } from './LanguageUa';
import { DEU } from './LanguageDeu';

export const Translator = name => {
  const len = useSelector(getLanguage);
  let titles = '';
  if (len === 'EN') titles = EN[name];
  if (len === 'RU') titles = RU[name];
  if (len === 'UA') titles = UA[name];
  if (len === 'DEU') titles = DEU[name];

  return <>{titles}</>;
};

export default Translator;
