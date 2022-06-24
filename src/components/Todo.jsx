import { useState } from "react"

export default function Todo({todo, onUpdate, onDelete}){
  const [isEdit, setIsEdit] = useState(false)

  function FormEdit(){
    const [newValue, setNewValue] = useState(todo.title)

    function handleSubmit(e){
      e.preventDefault()
      onUpdate(todo.id, newValue)
      setIsEdit(false)
    }

    function handleChange(e){
      const value = e.target.value  
      setNewValue(value)
    }

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="todoInput" 
          onChange={handleChange} 
          value={newValue}
        />
        <button className="button">Actualizar</button>
      </form>
    )
  }

  function TodoElement(){
    return (
      <div className="todoInfo">
        <span className="todoTitle">{todo.title}</span>
        <button className="button" onClick={() => setIsEdit(true)}>Editar</button>
        <button className="buttonDelete" onClick={() => onDelete(todo.id)}>Eliminar</button>
      </div>
    )
  }

  return (
    <div className="todo">
      {isEdit 
        ? <FormEdit />
        : <TodoElement />
      }
    </div>    
  )
}