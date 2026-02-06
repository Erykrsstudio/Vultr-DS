
import './Button.css'

const variantClassName = {
  primary: 'btn--primary',
  success: 'btn--success',
  gray: 'btn--gray',
  danger: 'btn--danger',
  default: 'btn--default'
}

const sizeClassName = {
  xs: 'btn--xs',
  sm: 'btn--sm',
  base: 'btn--base',
  lg: 'btn--lg',
  xl: 'btn--xl',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  type = 'button',
  disabled = false,
  ...rest
}) {
  const variantClass = variantClassName[variant] ?? variantClassName.primary
  const sizeClass = sizeClassName[size] ?? sizeClassName.md

  const classes = [
    'btn',
    variantClass,
    sizeClass,
    fullWidth ? 'btn--full-width' : '',
    disabled ? 'btn--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}

