export function Todo({ id, name, deleteTodo }) {
  return (
    <li class="list-item">
      <label class="list-item-label">
        <input type="checkbox" data-list-item-checkbox />
        <span data-list-item-text>{name}</span>
      </label>
      <button onClick={() => deleteTodo(id)} data-button-delete>
        Delete
      </button>
    </li>
  )
}
