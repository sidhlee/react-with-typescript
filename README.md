# React.js & TypeScript

## Use setState callback when you can

To avoid un-deterministic behavior of asynchronous state update.

```tsx
const [todos, setTodos] = useState<Todo[]>([]);

const addTodo = (text: string) => {
  const todo = { id: 'id' + counter++, text };
  // React updates state asynchronously.
  // So 'todos' here might not be the most current state at the time of actual update.
  setTodos([...todos, todo]);
  // if todos gets updated here, todos above might not be the one you expect.
};
```

React guarantees that the callback will get the latest state at the moment of state update.

```tsx
// 'todos' is the latest state when this callback is called.
setTodos((prevTodos) => [...todos, todo]);
```

## Bind eventHandler. No anonymous function.

Less anonymous function = less pain debugging

```tsx
// Arrow function - anonymous on stack trace
<button onClick={() => props.handleTodoClick(todo.id)} />

// Bind - handleTodoClick on stack trace
<button onClick={props.handleTodoClick.bind(null, todo.id)} />
```
