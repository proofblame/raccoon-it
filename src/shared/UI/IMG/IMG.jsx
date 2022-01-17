import style from './IMG.module.scss';
import PropTypes from 'prop-types';

const IMG = ({ src, alt, className }) => {
  return (
    <div className={className}>
      <img src={src} alt={alt} className={style.img} />
    </div>
  );
};

IMG.propTypes = {
  className: PropTypes.string,
};

IMG.defaultProps = {
  className: null,
};

export default IMG;
