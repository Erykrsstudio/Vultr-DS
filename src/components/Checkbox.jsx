import { useId } from 'react'
import './checkbox.scss'

export function Checkbox({
  checked,
  onChange,
  className = '',
  ...rest
}) {
  const id = useId()

  const inputProps = checked !== undefined 
    ? { checked, onChange }
    : {}

  return (
    <label className={`checkbox ${className}`.trim()}>
      <input
        id={id}
        className="checkbox__input"
        type="checkbox"
        {...inputProps}
        {...rest}
      />
        <span htmlFor={id} className="checkbox__label">
          I agree to the <a>Terms of Service</a>.
        </span>
      
    </label>
  )
}
