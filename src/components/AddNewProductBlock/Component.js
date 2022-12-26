import Container from 'components/Container/Container';
import { Wrapper, Title, Button } from './Component.styled';
import AddNewProductForm from 'components/AddNewProductForm/Component';
import { Translator } from 'components/language/translator';

// const onClick =

const AddNewProductBlock = () => {
  return (
    <Wrapper>
      <Container>
        <Title>{Translator('addNewProduct')}</Title>
        <Button type="button">
          <svg width="14" height="14">
            <path d="M13.72 7.96H7.96v5.76H6.04V7.96H.28V6.04h5.76V.28h1.92v5.76h5.76v1.92Z" />
          </svg>
        </Button>
        <AddNewProductForm />
      </Container>
    </Wrapper>
  );
};

export default AddNewProductBlock;
