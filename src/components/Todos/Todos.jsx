import './Todos.css'
import InputField from '../common/InputField/InputField'
import TodoItem from './TodoItem/TodoItem'

const Todos = () => {
  return (
    <div className='todos'>
      <InputField />

      <div className='todos__list'>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>


      <div className="footer">
        <div className="footer__left-items-text">
          1 item left
        </div>

        <div className="footer__navbar">
          <button className='footer__navbar-item btn btn--bordered'>All</button>
          <button className='footer__navbar-item btn btn--bordered'>Active</button>
          <button className='footer__navbar-item btn'>Completed</button>
        </div>

        <button className='btn'>Clear Complete</button>
      </div>
    </div>
  )
}

export default Todos
