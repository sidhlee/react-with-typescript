import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

//[{ id: 't1', text: 'Finish the course' }];
let counter = 0;

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const todo = { id: 'id' + counter++, text };
    // 'todos' is the latest state when this callback is called.
    setTodos((prevTodos) => [...todos, todo]);
  };

  const removeTodo = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo addTodo={addTodo} />
      <TodoList items={todos} handleTodoClick={removeTodo} />
    </div>
  );
};

export default App;
