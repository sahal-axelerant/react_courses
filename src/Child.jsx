import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { render } from "react-dom"

export class Child extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: "", age: 0 }
  }

  componentDidMount() {
    console.log("Render")
    console.log("Hi")
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("Render")
    if (this.state.name != prevState.name || this.state.age != prevState.age) {
      console.log(
        `My name is ${this.state.name} and I am ${this.state.age} years old`
      )
    }
    if (this.state.name != prevState.name) {
      document.title = this.state.name
      clearTimeout(this.nameTimeout)
      this.nameTimeout = setTimeout(() => {
        console.log(`My name is ${this.state.name}`)
      }, 1000)
    }
  }

  componentWillUnmount() {
    console.log("Bye")
    if (this.nameTimeout !== null) clearTimeout(this.nameTimeout)
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <button onClick={() => this.setState({ age: this.state.age - 1 })}>
          -
        </button>
        {this.state.age}
        <button onClick={() => this.setState({ age: this.state.age + 1 })}>
          +
        </button>
        <br />
        <br />
        My name is {this.state.name} and I am {this.state.age} years old.
      </div>
    )
  }
}
