import { useSelector } from 'react-redux';
import { getLanguage } from '../../redux/services/languageSlice';
import { EN } from './LanguageEn';
import { RU } from './LanguageRu';
import { UA } from './LanguageUa';
import { DEU } from './LanguageDeu';

export const Translator = name => {
  const len = useSelector(getLanguage);
  const titles = [];

  const audit = Obj => {
    const auditEN = Object.keys(Obj).includes(name);
    return auditEN ? titles.push(Obj[name]) : titles.push(name);
  };

  switch (len) {
    case 'EN':
      audit(EN);
      break;
    case 'RU':
      audit(RU);
      break;
    case 'UA':
      audit(UA);
      break;
    case 'DEU':
      audit(DEU);
      break;
    default:
      titles.push('*!!!*');
  }

  return <>{[titles]}</>;
};

export default Translator;
