export function TodoListItem({ children, isComplete }) {
  return (
    <div>
      <input type="checkbox" id="is_complete" checked={isComplete} />
      <label htmlFor="is_complete">{children}</label>
    </div>
  )
}
