import './Todos.css'
import InputField from '../common/InputField/InputField'
import TodoItem from './TodoItem/TodoItem'

const Todos = () => {
  return (
    <div className='todos'>
      <div className="todos__text-field">
        <InputField />
      </div>

      <div className='todos__list'>
        <div className="todos__list-item">
          <TodoItem />
        </div>
        <div className="todos__list-item">
          <TodoItem />
        </div>
        <div className="todos__list-item">
          <TodoItem />
        </div>
      </div>


      <div className="todos__footer">
        <div className="todos__footer-left-items-text">
          1 item left
        </div>

        <div className="todos__footer-navbar">
          <button className='todos__footer-navbar-item btn btn--bordered'>All</button>
          <button className='todos__footer-navbar-item btn btn--bordered'>Active</button>
          <button className='todos__footer-navbar-item btn'>Completed</button>
        </div>

        <button className='btn'>Clear Complete</button>
      </div>
    </div>
  )
}

export default Todos
