import './input.scss'
export function Input({
  placeholder = '',
  type = 'text',
  className = '',
  ...rest
}) {
  return (
    <div className={`input ${className}`.trim()}>
      <input
        className="input__field"
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
}
