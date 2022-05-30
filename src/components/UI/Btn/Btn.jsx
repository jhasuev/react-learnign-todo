import './Btn.css'

const Btn = ({children, bordered, className, ...props}) => {
  return (
    <button
    { ...props }
    className={`${className} btn ${bordered ? 'btn--bordered' : ''}`}
    >{children}</button>
  )
}

export default Btn
