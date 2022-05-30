import Checkbox from '../../UI/Checkbox/Checkbox'
import './TodoItem.css'

const TodoItem = ({todo, onDone, className, ...props}) => {
  return (
    <div
      className={`todo-item ${ className }`}
    >
      <div className='todo-item__radio'>
        <Checkbox
          checked={todo.done}
          onChange={e => onDone(todo.id, e.target.checked)}
        />
      </div>

      <div
        className={
          `
            todo-item__text
            ${ todo.done ? ' todo-item__text--done' : '' }
          `
        }
      >
        {todo.title}
      </div>
    </div>
  )
}

export default TodoItem
