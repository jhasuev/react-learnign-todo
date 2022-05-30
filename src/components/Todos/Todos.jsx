import { useState } from 'react'
import './Todos.css'
import InputField from '../UI/InputField/InputField'
import TodoItem from './TodoItem/TodoItem'
import Btn from '../UI/Btn/Btn'

const Todos = () => {
  const [todoText, setTodoText] = useState('')

  const [todos, setTodos] = useState([
    { id: 1, title: 'Work', done: true },
    { id: 2, title: 'Walk', done: false },
    { id: 3, title: 'Go to beach', done: true },
  ])

  const addTodoItem = () => {
    if (!todoText.trim()) {
      return null
    }
    
    const todo = {
      id: parseInt(Math.random() * 100 + Date.now()),
      title: todoText,
      done: false
    }
    
    setTodos([...todos, todo])
    setTodoText('')
  }

  return (
    <div className='todos'>
      <div className="todos__text-field">
        <InputField
          value={todoText}
          onChange={e => setTodoText(e.target.value)}
          onKeyPress={e => e.charCode === 13 && addTodoItem()}
        />
      </div>

      <div className='todos__list'>
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>

      <div className="todos__footer">
        <div className="todos__footer-left-items-text">
          1 item left
        </div>

        <div className="todos__footer-navbar">
          <Btn className="todos__footer-navbar-item" bordered={true}>All</Btn>
          <Btn className="todos__footer-navbar-item" bordered={false}>Active</Btn>
          <Btn className="todos__footer-navbar-item" bordered={true}>Completed</Btn>
        </div>

        <Btn>Clear Complete</Btn>
      </div>
    </div>
  )
}

export default Todos
