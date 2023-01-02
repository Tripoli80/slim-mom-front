import PropTypes from 'prop-types';
import { Circles } from 'react-loader-spinner';

export const Loader = ({
  size = 35,
  color = '#FC842D',
  wrapperStyle = null,
}) => {
  return (
    <Circles
      color={color}
      height={size}
      width={size}
      wrapperStyle={wrapperStyle}
    />
  );
};

Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};
