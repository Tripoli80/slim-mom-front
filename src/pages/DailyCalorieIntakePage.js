import styled from '@emotion/styled';
import DailyCalorieIntake from 'components/DailyCalorieIntake/DailyCalorieIntake';
import { Wrapper } from 'components/UserInfo/UserInfo.styled';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import { selectCategories } from 'redux/products/selectors';

const FormWrapper = styled.div`
  padding: 0 20px;
`;

const DailyCalorieIntakePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const categories = useSelector(selectCategories);
  const redirectToRegistration = () => {
    navigate('/registration', { replace: true });
  };

  return (
    <>
      <Wrapper>
        {location.state?.from && (
          <NavLink to={location.state?.from}>
            <svg width="15" height="9" fill="none">
              <path d="M14 1.5v3H2m0 0L5.5 1M2 4.5 5.5 8" strokeWidth="2" />
            </svg>
          </NavLink>
        )}
      </Wrapper>
      <FormWrapper>
        <DailyCalorieIntake
          stats={categories}
          onClose={redirectToRegistration}
        />
      </FormWrapper>
    </>
  );
};
export default DailyCalorieIntakePage;
