import Checkbox from '../../common/Checkbox/Checkbox'
import './TodoItem.css'

const TodoItem = () => {
  return (
    <div className='todo-item'>
      <div className='todo-item__radio'>
        <Checkbox />
      </div>

      <div className="todo-item__text">
        Text Text Text
      </div>
    </div>
  )
}

export default TodoItem
