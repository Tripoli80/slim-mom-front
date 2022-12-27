import { Box, Backdrop } from './LoaderBox.styled';
import { Circles } from 'react-loader-spinner';

export const LoaderBox = () => {
  return (
    <>
      <Backdrop>
        <Box>
          <Circles
            color="#FC842D"
            height="80"
            width="80"
            wrapperStyle={{ justifyContent: 'center' }}
          />
        </Box>
      </Backdrop>
    </>
  );
};
