import React from "react"
import { PersonClass } from "./PersonClass"
import { Person } from "./Person"
class App extends React.Component {
  render() {
    const divCss = `.flex-container {
      display: flex;
      justify-content: space-around;
    }`
    return (
      <div className="flex-container">
        <style>{divCss}</style>
        <div>
          <h1>Function Component</h1>
          <Person />
        </div>
        <div>
          <h1>Class Component</h1>
          <PersonClass />
        </div>
      </div>
    )
  }
}

export default App
