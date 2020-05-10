import React, { useRef } from 'react';
import classes from './NewTodo.module.css';

type NewTodoProps = {
  addTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  // should provide default value since the first time NewTodo gets rendered (mounted)
  // ref has not attached to the DOM element
  const textInputRef = useRef<HTMLInputElement>(null);
  const handleTodoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add non-null assertion operator because this runs before
    // the refed element is rendered to the DOM
    const enteredText = textInputRef.current!.value;
    props.addTodo(enteredText);
    textInputRef.current!.value = '';
  };

  return (
    <form onSubmit={handleTodoSubmit}>
      <div className={classes.formControl}>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} autoFocus />
      </div>
      <button>ADD TODO</button>
    </form>
  );
};

export default NewTodo;
