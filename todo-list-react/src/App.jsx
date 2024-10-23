/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
// index.js or App.js
import "font-awesome/css/font-awesome.min.css";
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Form from "./components/form.jsx";
import TodoList from "./components/TodoList.jsx";

export default function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}
