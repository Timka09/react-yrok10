export const TodosList = ({ todos, onDeleteToDo, onToggleCompleted }) => {
  console.log(todos);

  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <li key={id}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />
          <p>{text}</p>
          <button type="button" onClick={() => onDeleteToDo(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
