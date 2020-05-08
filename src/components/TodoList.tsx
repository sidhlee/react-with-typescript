import React from 'react';

// we could also declare props type directly inside <> after React.FC
interface TodoListProps {
  items: { id: string; text: string }[];
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
