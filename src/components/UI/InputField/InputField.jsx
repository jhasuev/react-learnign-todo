import './InputField.css'

const InputField = ({className, ...props}) => {
  return (
    <div className='input-field'>
      <input
        className={`${className} input-field__input`}
        type="text"
        placeholder="Шо делать будем ?"
        { ...props }
      />
    </div>
  )
}

export default InputField
