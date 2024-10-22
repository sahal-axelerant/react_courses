import React from "react"
export class TodoListItem extends React.Component {
  render() {
    return (
      <div>
        <input
          type="checkbox"
          id="is_complete"
          checked={this.props.isComplete}
        />
        <label htmlFor="is_complete">{this.props.children}</label>
      </div>
    )
  }
}
