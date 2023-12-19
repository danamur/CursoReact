import { useState } from 'react';
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis/todosApi';

export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1);

  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);
  
  const nextTodo = () => {
    setTodoId(todoId + 1);
  }

  const prevTodo = () => {

    console.log(todoId);
    if (todoId === 1) {
      return;
    }
    setTodoId(todoId - 1);
  }

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>

      <pre>{ JSON.stringify(todo)}</pre>

      {/* <ul>
        {todos.map(({ id, title, completed }) => (
          <li key={id}>
            <strong>{completed ? 'DONE: ' : 'Pending: '}</strong>
            {title}
          </li>
        ))}
      </ul> */}

      <button onClick={ prevTodo }>
        Prev todo
      </button>
      <button onClick={ nextTodo }>
        Next todo
      </button>
    </>
  )
}
