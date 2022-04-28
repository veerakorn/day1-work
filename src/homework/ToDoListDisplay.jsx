const ToDoListDisplay = ({list, toggleMark}) => {
  const listItems = list.map((row) =>
    <li key={row.id} className={row.mark ? 'is-done' : ''} style={{ textDecoration: row.mark ? 'line-through' : null }} onClick={() => toggleMark(row.id)}>{row.value}</li>
  );

  const remaining = list.filter(row => !row.mark).length;

  return (
    <div>
      <p className="task-counter">{remaining} remaining out of {list.length} tasks</p>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default ToDoListDisplay