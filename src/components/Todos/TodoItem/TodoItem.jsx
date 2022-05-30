import Checkbox from '../../UI/Checkbox/Checkbox'
import './TodoItem.css'

const TodoItem = (props) => {
  return (
    <div className='todo-item'>
      <div className='todo-item__radio'>
        <Checkbox />
      </div>

      <div className={'todo-item__text' + (props.todo.done ? ' todo-item__text--done' : '')}>
        {props.todo.title}
      </div>
    </div>
  )
}

export default TodoItem
