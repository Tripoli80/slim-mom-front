import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  position: relative;

  // padding-bottom: 10px;
  align-items: center;

  @media (min-width: 768px) {
    padding-bottom: 20px;
    align-items: normal;
    padding-right: 32px;
    padding-left: 32px;
  }
  @media (min-width: 1280px) {
    padding-bottom: 40px;
  }
`;
export const Title = styled.h2`
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  color: #212121;
  width: 100%;
  font-size: 18px;
  margin-bottom: 34px;
  padding: 0 10px;
  padding-top: 32px;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    width: 700px;
    font-size: 34px;
    line-height: 48px;
    margin-bottom: 32px;
    padding-top: 100px;
  }

  @media (min-width: 1264px) {
    width: 600px;
    padding-top: 145px;
  }
`;
export const Wrapper = styled.div`
  width: 240px;
  @media (min-width: 768px) {
    width: 600px;
    display: flex;
  }
`;
export const Section = styled.div`
  @media (min-width: 768px) {
    margin-right: 32px;
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  color: rgb(200, 10, 65);
`;
