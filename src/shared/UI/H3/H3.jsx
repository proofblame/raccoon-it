import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './H3.module.scss';

const H3 = ({ children, className }) => {
  const classes = classNames(style.header, className);

  return <h3 className={classes}>{children}</h3>;
};

H3.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

H3.defaultProps = {
  children: 'Заголовок',
  className: '',
};

export default H3;
