import React from "react"
import { TodoList } from "./TodoList"
function App() {
  return (
    <div>
      <h1>TO DO List</h1>
      <TodoList items={["item1", "item2", "item3", "item4"]} />
    </div>
  )
}

export default App
