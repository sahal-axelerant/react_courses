import React from "react"

export class User extends React.Component {
  render() {
    return (
      <div>
        <span className="name">{this.props.children}</span>{" "}
        <span className="age" style={{ color: "red" }}>
          {this.props.age}
        </span>
      </div>
    )
  }
}
