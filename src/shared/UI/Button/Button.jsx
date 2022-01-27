import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './Button.module.scss';

const Button = ({
  children,
  onClick,
  className,
  disabled,
  active,
  ...attr
}) => {
  const onClickAction = (e) => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };

  const classes = classNames(style.button, className, { active });
  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClickAction}
      {...attr}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

Button.defaultProps = {
  children: '',
  onClick: () => { },
  className: '',
  disabled: false,
  active: false,
};

export default Button;
