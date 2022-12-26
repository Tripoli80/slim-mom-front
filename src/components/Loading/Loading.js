import PropTypes from 'prop-types';
import { Circles } from 'react-loader-spinner';

export const Loader = ({ size }) => {
  return (
    <>
      <Circles
        color="#FC842D"
        height={size}
        width={size}
        wrapperStyle={{ justifyContent: 'center' }}
      />
    </>
  );
};

Loader.propTypes = {
  size: PropTypes.number,
};
