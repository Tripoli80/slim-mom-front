import Container from 'components/Container/Container';
import { Wrapper, Title } from './Component.styled';
import AddNewProductForm from 'components/AddNewProductForm/Component';
import { Translator } from 'components/language/translator';

const AddNewProductBlock = () => {
  return (
    <Wrapper>
      <Container>
        <Title>{Translator('addNewProduct')}</Title>
        <AddNewProductForm />
      </Container>
    </Wrapper>
  );
};

export default AddNewProductBlock;
