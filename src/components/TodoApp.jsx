import { useState } from "react"
import Todo from "./Todo"
import './todoApp.css'

export default function TodoApp(){
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault()

    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      complete: false
    }

    setTodos([...todos, newTodo])
    setTitle('')
  }

  function handleChange(e){
    const value = e.target.value
    setTitle(value)
  }

  function handleUpdate(id, value){
    const copy = [...todos]
    const item = copy.find( item => item.id === id)
    item.title = value
    setTodos(copy)
  }

  function handleDelete(id){
    const newTodos = todos.filter( todo => id !== todo.id)
    setTodos(newTodos)
  }

  return (
    <div className="todoContainer">
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="todoInput" 
          value={title}
          onChange={handleChange}
        />
        <button 
          type="submit" 
          className="buttonCreate" 
          
        >Agregar</button>
        
      </form>

      <div className="todosContainer">
        {
          todos.map(todo => (
            <Todo 
              key={todo.id} 
              todo={todo}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))
        }
      </div>
    </div>
  )
}
