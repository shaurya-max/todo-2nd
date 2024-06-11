import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = async () => { // Make the function asynchronous
    try {
      const response = await fetch('http://localhost:8000/Todolist', { // Change the endpoint to match your backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }), // Send the text value as the body
      });
      
      if (!response.ok) {
        throw new Error('Failed to add todo');
      }
      
      const data = await response.json(); // Parse the response JSON
      setTodos([...todos, data]);
      setText('');
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = (id) => {
    fetch(`/todos/${id}`, {
      method: 'DELETE'
    })
      .then(() => setTodos(todos.filter(todo => todo._id !== id)))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li key={todo._id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
