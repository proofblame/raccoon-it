import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './h2.module.scss';

const H2 = ({ children, className }) => {
  const classes = classNames(style.title, className);
  return <h2 className={classes}>{children}</h2>;
};

H2.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

H2.defaultProps = {
  children: 'Заголовок',
  className: '',
};

export default H2;
