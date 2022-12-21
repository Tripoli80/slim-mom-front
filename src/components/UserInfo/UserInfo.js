import { Wrapper, UserName, Exit } from './UserInfo.styled';
import { Translator } from 'components/language/translator';

export const UserInfo = () => {
  const Langu = ({ name }) => {
    return Translator(name);
  };
  return (
    <Wrapper>
      <UserName>{<Langu name="nik" />}</UserName>
      <Exit>{<Langu name="exit" />}</Exit>
    </Wrapper>
  );
};
