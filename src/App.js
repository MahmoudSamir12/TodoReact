import React, { useState } from 'react'
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import './App.css';

const App = () => {

    const [todos, setTodos] = useState([]);

    //Create new todo
    const createTodo = (title) => {
      const newTodo = {id: crypto.randomUUID(), title, completed: false};
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
    };

    //remove todo
    const removeTodo = (id) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    };

    //Change todo
    const changeTodo = (id, title, completed = false) => {
      const updatedTodos = todos.map((todo) => {
        if(todo.id === id)
        {
          return {...todo, title, completed};
        }
        return todo;
      });
      setTodos(updatedTodos);
    };

  return (
    <main className='main'>
      <h1>
        React Todo <span>Streamline your day, The React Way!</span>
      </h1>

      <TodoList todos={todos} removeTodo={removeTodo} changeTodo={changeTodo} />
      <TodoCreate  createTodo={createTodo} />
    </main>
  )
}

export default App