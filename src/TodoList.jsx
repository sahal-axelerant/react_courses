export function TodoList(props) {
  return (
    <ul>
      <li>{props.items[0]}</li>
      <li>{props.items[1]}</li>
      <li>{props.items[2]}</li>
      <li>{props.items[3]}</li>
    </ul>
  )
}
