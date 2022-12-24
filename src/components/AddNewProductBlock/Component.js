import Container from 'components/Container/Container';
import { Wrapper } from './Component.styled';
import AddNewProductForm from 'components/AddNewProductForm/Component';

const AddNewProductBlock = () => {
  return (
    <Wrapper>
      <Container>
        <AddNewProductForm />
      </Container>
    </Wrapper>
  );
};

export default AddNewProductBlock;
