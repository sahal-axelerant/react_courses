import { useState } from "react"
import { Todo } from "./Todo"
import "./assets/styles.css"

function App() {
  const [inputVal, setInputVal] = useState("")
  const [todos, setTodos] = useState([])
  let todos_html = ""
  if (todos) {
    console.log(todos)
    todos_html = todos.map((todo) => (
      <Todo name={todo.name} id={todo.id} deleteTodo={deleteTodo} />
    ))
  }
  function addTodo() {
    if (inputVal === "") return
    setTodos((current) => [
      ...current,
      { name: inputVal, id: crypto.randomUUID() },
    ])
    setInputVal("")
  }
  function deleteTodo(id) {
    setTodos((current) => {
      return current.filter((todo) => todo.id !== id)
    })
  }
  return (
    <>
      <ul id="list">{todos_html}</ul>
      <div id="new-todo-form">
        <label for="todo-input">New Todo</label>
        <input
          id="todo-input"
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </>
  )
}

export default App
