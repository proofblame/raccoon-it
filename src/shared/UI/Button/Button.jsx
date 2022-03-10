import PropTypes from 'prop-types';
import style from './button.module.scss';

const Button = ({
  children,
  onClick,
  className,
  disabled,
  active,
  type,
  size,
  ...attr
}) => {
  const onClickAction = (e) => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };

  const classes = `
  ${style.button}
  ${type === 'inactive' ? style.inactive : ''}
  ${size === 'small' ? style.small : ''}
  `

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
