import './Checkbox.css'

const Checkbox = () => {
  return (
    <label className='checkbox'>
      <input type="checkbox" className="checkbox__field" />
      <div className="checkbox__icon"></div>
    </label>
  )
}

export default Checkbox
