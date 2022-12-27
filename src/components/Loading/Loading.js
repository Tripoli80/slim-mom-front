import PropTypes from 'prop-types';
import { Circles } from 'react-loader-spinner';

// export const Loader = () => {
//   return (
//     <>
//       <Circles
//         color="#FC842D"
//         height="35"
//         width="35"
//         wrapperStyle={{ justifyContent: 'center', margin: 10 }}
//       />
//     </>
//   );
// };

// Loader.propTypes = {
//   size: PropTypes.number,
// };

export const Loader = ({ size=35, color='#FC842D', wrapperStyle=null }) => {
  return (
    <>
      <Circles
        color={color}
        height={size}
        width={size}
        wrapperStyle={wrapperStyle}
      />
    </>
  );
};

Loader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};