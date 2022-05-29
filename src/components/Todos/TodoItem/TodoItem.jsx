import RadioButton from '../../common/RadioButton/RadioButton'
import './TodoItem.css'

const TodoItem = () => {
  return (
    <div className='todo-item'>
      <div className='todo-item__radio'>
        <RadioButton />
      </div>

      <div className="todo-item__text">
        Text Text Text
      </div>
    </div>
  )
}

export default TodoItem
