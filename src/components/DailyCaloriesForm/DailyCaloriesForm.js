import Container from 'components/Container/Container';
import Input from 'components/Input/Input';
import {
  Box,
  BtnSub,
  InputRadio,
  InputRadioStyled,
  LabelRadio,
  LabelRadioText,
  TitleRaioGroup,
  WrapperRadio,
} from 'components/Input/Input.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Translator } from 'components/language/translator';
import {
  ErrorMessage,
  Form,
  Section,
  Title,
  Wrapper,
} from './DailyCaloriesForm.styled';
import { useWindowWidth } from '@react-hook/window-size';
import { Modal } from 'components/Modal/Component';
import DailyCalorieIntake from 'components/DailyCalorieIntake/DailyCalorieIntake';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from 'redux/services/modalSlice';
import { Button } from 'components/Button/Button';

const KEY_DAILY_CALORIE = 'dailyCalorie';
const DailyCaloriesForm = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector(store => store.modal);
  const onOpenModal = () => {
    dispatch(openModal());
  };

  const validation = Yup.object().shape({
    height: Yup.number()
      .typeError('Must be a number')
      .min(100, 'Minimal 20')
      .max(250, 'Max 250')
      .required('Required!'),
    age: Yup.number()
      .typeError('Must be a number')
      .min(18, 'Minimal 18')
      .max(100, 'Max 100')
      .required('Required!'),
    cWeight: Yup.number()
      .typeError('Must be a number')
      .min(20, 'Minimal 20')
      .max(500, 'Max 500')
      .required('Required!'),
    dWeight: Yup.number()
      .typeError('Must be a number')
      .min(20, 'Minimal 20')
      .max(
        Yup.ref('cWeight'),
        'The maximum value cannot be greater than the current one.'
      )
      .required('Required!'),
    blood: Yup.number().required('Required!'),
  });
  const getFromLocalStorage = JSON.parse(
    localStorage.getItem(KEY_DAILY_CALORIE)
  );
  const initialValues = getFromLocalStorage
    ? {
        height: getFromLocalStorage.height,
        age: getFromLocalStorage.age,
        cWeight: getFromLocalStorage.cWeight,
        dWeight: getFromLocalStorage.dWeight,
        blood: getFromLocalStorage.blood,
      }
    : {
        height: '',
        age: '',
        cWeight: '',
        dWeight: '',
        blood: '1',
      };
  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validation,
    onSubmit: values => {
      localStorage.setItem(KEY_DAILY_CALORIE, JSON.stringify(values));
      onOpenModal();
    },
  });

  const windowWidth = useWindowWidth();
  if (isOpen) {
    if (windowWidth >= 768) {
      document.body.style.overflow = 'hidden';
    }
  }
  if (!isOpen) {
    document.body.style.overflow = 'unset';
  }

  const { handleSubmit, handleChange, values, touched, errors } = formik;
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Title>{Translator('calculateYourDaily')}</Title>
          <Wrapper>
            <Section>
              <Input
                placeHolder={Translator('height')}
                id="height"
                name="height"
                onChange={handleChange}
                value={values.height}
              />
              {touched.height && <ErrorMessage>{errors.height}</ErrorMessage>}

              <Input
                placeHolder={Translator('age')}
                id="age"
                name="age"
                type="text"
                onChange={handleChange}
                value={values.age}
              />
              {touched.age && <ErrorMessage>{errors.age}</ErrorMessage>}

              <Input
                placeHolder={Translator('currentWeight')}
                id="cWeight"
                name="cWeight"
                type="text"
                onChange={handleChange}
                value={values.cWeight}
              />
              {touched.cWeight && <ErrorMessage>{errors.cWeight}</ErrorMessage>}
            </Section>
            <div>
              <Input
                placeHolder={Translator('desiredWeight')}
                id="dWeight"
                name="dWeight"
                type="text"
                onChange={handleChange}
                value={values.dWeight}
              />
              {touched.dWeight && <ErrorMessage>{errors.dWeight}</ErrorMessage>}

              <Box>
                <TitleRaioGroup>{Translator('bloodType')}</TitleRaioGroup>
                <WrapperRadio>
                  <LabelRadio>
                    <InputRadio
                      name="blood"
                      type="radio"
                      value="1"
                      onChange={handleChange}
                      checked={values.blood === '1' || true}
                    />
                    <InputRadioStyled />
                    <LabelRadioText>1</LabelRadioText>
                  </LabelRadio>
                  <LabelRadio>
                    <InputRadio
                      name="blood"
                      type="radio"
                      onChange={handleChange}
                      value="2"
                      checked={values.blood === '2'}
                    />
                    <InputRadioStyled />
                    <LabelRadioText>2</LabelRadioText>
                  </LabelRadio>
                  <LabelRadio>
                    <InputRadio
                      name="blood"
                      type="radio"
                      onChange={handleChange}
                      value="3"
                      checked={values.blood === '3'}
                    />
                    <InputRadioStyled />
                    <LabelRadioText>3</LabelRadioText>
                  </LabelRadio>
                  <LabelRadio>
                    <InputRadio
                      name="blood"
                      type="radio"
                      onChange={handleChange}
                      value="4"
                      checked={values.blood === '4'}
                    />
                    <InputRadioStyled />
                    <LabelRadioText>4</LabelRadioText>
                  </LabelRadio>
                </WrapperRadio>
              </Box>
              {touched.blood && <ErrorMessage>{errors.blood}</ErrorMessage>}
            </div>
          </Wrapper>
          <BtnSub>
            <Button type="submit" onSubmit={handleSubmit}>
              {Translator('Start losing weight')}
            </Button>
          </BtnSub>
        </Form>
      </Container>
      {isOpen && (
        <Modal
          onClose={() => {
            dispatch(closeModal());
          }}
        >
          <DailyCalorieIntake data={values}> </DailyCalorieIntake>
        </Modal>
      )}
    </>
  );
};
export default DailyCaloriesForm;
