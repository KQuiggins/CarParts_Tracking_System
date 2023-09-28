import PropTypes from 'prop-types';
import { Player } from "@lottiefiles/react-lottie-player";

const LottieAnimation = ({ src, height = "500px", width = "500px" }) => {
  return (
    <Player
      src={src}
      style={{ height, width }}
      loop
      autoplay
    />
  );
};

LottieAnimation.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.string,
  width: PropTypes.string
};

export default LottieAnimation;
