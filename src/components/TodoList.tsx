import React from 'react';
import './TodoList.module.css';

// we could also declare props type directly inside <> after React.FC
interface TodoListProps {
  items: { id: string; text: string }[];
  handleTodoClick: (todoId: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={props.handleTodoClick.bind(null, todo.id)}>
            DELETE
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
