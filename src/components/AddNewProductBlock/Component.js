import Container from 'components/Container/Container';
import { Wrapper } from './Component.styled';
import AddNewProductForm from 'components/AddNewProductForm/Component';
import { Translator } from 'components/language/translator';

const AddNewProductBlock = () => {
  return (
    <Wrapper>
      <Container>
        {Translator('addNewProduct')}
        <AddNewProductForm />
      </Container>
    </Wrapper>
  );
};

export default AddNewProductBlock;
