import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './H1.module.scss';

const H1 = ({ children, className }) => {
  const classes = classNames(style.mainHeader, className);

  return <h1 className={classes}>{children}</h1>;
};

H1.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

H1.defaultProps = {
  children: 'Заголовок',
  className: '',
};

export default H1;
