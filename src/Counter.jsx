import React from "react"

export class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }
  render() {
    const incrementCount = () => {
      this.setState({ count: this.state.count + 1 })
    }
    const resetCount = () => {
      this.setState({ count: 0 })
    }
    return (
      <div>
        <h1>{this.state.count}</h1>{" "}
        <button onClick={incrementCount}>Count</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    )
  }
}
