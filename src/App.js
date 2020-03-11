import React, { useState } from "react";

function Input(props) {
  const { onNewInput } = props;

  const [input, setInput] = useState("");
  const inputChangeHandler = event => {
    setInput(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    if (input.length === 0) {
      return;
    }
    onNewInput(input);
    setInput("");
  };

  return (
    <form
      onSubmit={submitHandler}
      style={{ padding: "10px", border: "1px solid #a0aec0", display: "flex" }}
    >
      <input
        type="text"
        placeholder="Add new todo"
        value={input}
        onChange={inputChangeHandler}
        style={{ padding: "10px", flexGrow: 1 }}
      />
      <button
        style={{
          backgroundColor: "#edf2f7",
          color: "#68d391",
          padding: "10px"
        }}
        type="submit"
      >
        Add
      </button>
    </form>
  );
}

function TodoList(props) {
  const { todos, onDelete } = props;

  if (todos.length === 0) {
    return <div style={{ fontSize: "1.25rem", padding: "10px" }}>No todos</div>;
  }

  return (
    <div style={{ margin: "20px" }}>
      {todos.map(todo => {
        return <TodoListItem key={todo.id} todo={todo} onDelete={onDelete} />;
      })}
    </div>
  );
}

function TodoListItem(props) {
  const { todo, onDelete } = props;

  const onDeleteHandler = () => {
    onDelete(todo.id);
  };

  return (
    <div key={todo.id} style={{ backgroundColor: "#e2e8f0" }}>
      <button
        onClick={onDeleteHandler}
        style={{ color: "#e53e3e", margin: "20px" }}
      >
        DEL
      </button>
      {todo.task}
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([]);

  const newInputHandler = todo => {
    const newTodo = {
      id: Math.random() * 100000,
      task: todo
    };
    setTodos([...todos, newTodo]);
  };

  const onDeleteHandler = id => {
    let filteredTodos = todos.filter(todo => {
      return todo.id !== id;
    });
    setTodos(filteredTodos);
  };

  return (
    <div className="App" style={{ width: "50%" }}>
      <Input onNewInput={newInputHandler} />
      <TodoList todos={todos} onDelete={onDeleteHandler} />
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
}

export default App;
