import style from './Link.module.scss'
import classNames from 'classnames';


const Link = ({ className, href, children, active, ...attr }) => {
  const classes = classNames(style.button, style[className], { active });

  return (
    <a
      className={classes}
      href={href}
      {...attr}
    >{children}
    </a>
  )
}

export default Link
