import PropTypes from 'prop-types';
import { Circles } from 'react-loader-spinner';

export const Loader = ({ size, color }) => {
  return (
    <>
      <Circles
        color={color}
        height={size}
        width={size}
        wrapperStyle={{ justifyContent: 'center' }}
      />
    </>
  );
};

Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
