import { Button, DivCtnterd } from './DiaryAddProductForm.styled';
import { useNavigate, useLocation } from 'react-router';

export const DiaryAddProductMobile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <DivCtnterd>
        <Button
          type="button"
          onClick={() => navigate('add-product', { state: { from: location } })}
        >
          <svg width="14" height="14">
            <path d="M13.72 7.96H7.96v5.76H6.04V7.96H.28V6.04h5.76V.28h1.92v5.76h5.76v1.92Z" />
          </svg>
        </Button>
      </DivCtnterd>
    </>
  );
};
