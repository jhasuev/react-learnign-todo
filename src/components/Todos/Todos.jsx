import { useState, useMemo, useEffect } from 'react'
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

  const onDone = (todoId, done) => {
    todos.map(todo => {
      if (todo.id === todoId) {
        todo.done = done
      }

      return todo
    })

    setTodos([...todos])
  }

  const itemsCount = useMemo(() => todos.length, [todos])
  const incompletedTodos = useMemo(() => todos.filter(todo => !todo.done), [todos])
  const completedTodos = useMemo(() => todos.filter(todo => todo.done), [todos])

  const [showingType, setShowingType] = useState('all')

  const filteredTodos = useMemo(() => {
    return {
      active: incompletedTodos,
      completed: completedTodos,
    }[showingType] ?? todos
  }, [todos, showingType, incompletedTodos, completedTodos])

  const onChangeShowingType = (type) => {
    setShowingType(type)
  }

  const clearCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.done))
  }

  useEffect(() => {
    if (!filteredTodos.length) {
      setShowingType('all')
    }
  }, [filteredTodos])

  return (
    <div className='todos'>
      <div className="todos__text-field">
        <InputField
          value={todoText}
          onChange={e => setTodoText(e.target.value)}
          onKeyPress={e => e.charCode === 13 && addTodoItem()}
        />
      </div>

      {
        filteredTodos.length
        ?
          <div className='todos__list'>
            {filteredTodos.map(todo => (
              <TodoItem
                className="todos__list-item"
                todo={todo}
                key={todo.id}
                onDone={onDone}
              />
            ))}
          </div>
        : <div className='todos__no-todos-text'>There is no todos yet...</div>
      }

      <div className="todos__footer">
        <div className="todos__footer-left-items-text">
          {incompletedTodos.length} item left
        </div>

        <div className="todos__footer-navbar">
          <Btn
            className="todos__footer-navbar-item"
            bordered={showingType === 'all'}
            onClick={() => onChangeShowingType('all')}
          >All</Btn>

          { incompletedTodos.length && itemsCount >= incompletedTodos.length
            ? 
            <Btn
              className="todos__footer-navbar-item"
              bordered={showingType === 'active'}
              onClick={() => onChangeShowingType('active')}
            >Active</Btn>
            : ''
          }
          { completedTodos.length
            ? 
            <Btn
              className="todos__footer-navbar-item"
              bordered={showingType === 'completed'}
              onClick={() => onChangeShowingType('completed')}
            >Completed</Btn>
            : ''
          }
        </div>

        { completedTodos.length
          ? 
          <Btn onClick={clearCompletedTodos}>Clear Complete</Btn>
          : ''
        }
      </div>
    </div>
  )
}

export default Todos
