import React from "react"

export class PersonClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: "", age: 0 }
  }
  render() {
    const decrementAge = () => {
      this.setState({ age: this.state.age - 1 })
    }
    const incrementAge = () => {
      this.setState({ age: this.state.age + 1 })
    }
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.name}
            onChange={(e) => {
              this.setState({ name: e.target.value })
            }}
          />
        </div>
        <div>
          <button onClick={decrementAge}>-</button> {this.state.age}{" "}
          <button onClick={incrementAge}>+</button>
        </div>
        <div>
          My name is {this.state.name} and I am {this.state.age} years old
        </div>
      </div>
    )
  }
}
