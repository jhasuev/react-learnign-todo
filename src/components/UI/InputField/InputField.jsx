import './InputField.css'

const InputField = ({className, ...props}) => {
  return (
    <input
      className={`${className} input-field`}
      type="text"
      placeholder="Шо делать будем ?"
      { ...props }
    />
  )
}

export default InputField
