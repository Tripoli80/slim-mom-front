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

import {
  ErrorMessage,
  Form,
  Image,
  Section,
  Title,
  Wrapper,
} from './DailyCaloriesForm.styled';
import { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { Modal } from 'components/Modal/Component';
import DailyCalorieIntake from 'components/DailyCalorieIntake/DailyCalorieIntake';

const KEY_DAILY_CALORIE = 'dailyCalorie';
const DailyCaloriesForm = () => {
  const [showModal, setShowModal] = useState(false);
  const validation = Yup.object().shape({
    height: Yup.number()
      .typeError('Must be a number')
      .min(100, 'Minimal 120')
      .max(260, 'Max 260')
      .required('Required!'),
    age: Yup.number()
      .typeError('Must be a number')
      .min(18, 'Minimal 18')
      .max(120, 'Max 120')
      .required('Required!'),
    cWeight: Yup.number()
      .typeError('Must be a number')
      .min(50, 'Minimal 50')
      .max(250, 'Max 250')
      .required('Required!'),
    dWeight: Yup.number()
      .typeError('Must be a number')
      .min(45, 'Minimal 45')
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
        blood: '',
      };
  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validation,
    onSubmit: values => {
      localStorage.setItem(KEY_DAILY_CALORIE, JSON.stringify(values));

      setShowModal(true);
    },
  });

  const onClose = () => {
    setShowModal(false);
  };

  const windowWidth = useWindowWidth();
  if (showModal) {
    if (windowWidth >= 768) {
      document.body.style.overflow = 'hidden';
    }
  }
  if (!showModal) {
    document.body.style.overflow = 'unset';
  }

  const { handleSubmit, handleChange, values, touched, errors } = formik;
  return (
    <>
      <Image>
        <Container>
          <Form onSubmit={handleSubmit}>
            <Title>Calculate your daily calorie intake right now</Title>
            <Wrapper>
              <Section>
                <Input
                  placeHolder="Heigth*"
                  id="height"
                  name="height"
                  onChange={handleChange}
                  value={values.height}
                />
                {touched.height && <ErrorMessage>{errors.height}</ErrorMessage>}

                <Input
                  placeHolder="Age*"
                  id="age"
                  name="age"
                  type="text"
                  onChange={handleChange}
                  value={values.age}
                />
                {touched.age && <ErrorMessage>{errors.age}</ErrorMessage>}

                <Input
                  placeHolder="Current weight*"
                  id="cWeight"
                  name="cWeight"
                  type="text"
                  onChange={handleChange}
                  value={values.cWeight}
                />
                {touched.cWeight && (
                  <ErrorMessage>{errors.cWeight}</ErrorMessage>
                )}
              </Section>
              <div>
                <Input
                  placeHolder="Desired weight*"
                  id="dWeight"
                  name="dWeight"
                  type="text"
                  onChange={handleChange}
                  value={values.dWeight}
                />
                {touched.dWeight && (
                  <ErrorMessage>{errors.dWeight}</ErrorMessage>
                )}

                <Box>
                  <TitleRaioGroup>Blood type *</TitleRaioGroup>
                  <WrapperRadio>
                    <LabelRadio>
                      <InputRadio
                        name="blood"
                        type="radio"
                        value="1"
                        onChange={handleChange}
                        checked={values.blood === '1'}
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
            <BtnSub type="submit" onSubmit={handleSubmit}>
              Submit
            </BtnSub>
          </Form>
        </Container>
      </Image>
      {showModal && (
        <Modal onClose={onClose}>
          <DailyCalorieIntake data={values}> </DailyCalorieIntake>
        </Modal>
      )}
    </>
  );
};
export default DailyCaloriesForm;
