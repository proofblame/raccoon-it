import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './H2.module.scss';

const Header = ({ children, className }) => {
  const classes = classNames(style.header, className);
  return <h2 className={classes}>{children}</h2>;
};

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Header.defaultProps = {
  children: 'Заголовок',
  className: '',
};

export default Header;
