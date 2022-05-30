import './Checkbox.css'

const Checkbox = ({...props}) => {
  return (
    <label className='checkbox'>
      <input
        type="checkbox"
        className="checkbox__field"
        { ...props }
      />
      <div className="checkbox__icon"></div>
    </label>
  )
}

export default Checkbox
