type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem = ({ id, title, completed }: TodoItemProps) => {
  return (
    <li className="flex gap-1 items-center">
      <input id={id} className="cursor-pointer peer h-4 w-4" type="checkbox" checked={completed} />
      <label htmlFor={id} className="peer-checked:line-through">{title}</label>
    </li>
  )
}

export default TodoItem;