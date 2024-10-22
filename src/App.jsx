import React from "react"
import { TodoListItem } from "./TodoListItem"
function App() {
  return (
    <div>
      <h1>TO DO List</h1>
      <TodoListItem isComplete>Item1</TodoListItem>
      <TodoListItem>Item2</TodoListItem>
      <TodoListItem isComplete>Item3</TodoListItem>
    </div>
  )
}

export default App
