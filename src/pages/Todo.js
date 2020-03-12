import React, { useState, useEffect } from "react";
import {
  getAllTodos,
  createTodo,
  deleteTodo,
  toggleIsDone
} from "../utils/todos";

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
  const { todos, onDelete, onToggleDone } = props;

  if (todos.length === 0) {
    return <div style={{ fontSize: "1.25rem", padding: "10px" }}>No todos</div>;
  }

  return (
    <div style={{ margin: "20px" }}>
      {todos.map(todo => {
        return (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggleDone={onToggleDone}
          />
        );
      })}
    </div>
  );
}

function TodoListItem(props) {
  const { todo, onDelete, onToggleDone } = props;

  const onDeleteHandler = () => {
    onDelete(todo.id);
  };

  const onToggleHandler = () => {
    onToggleDone(todo);
  };

  return (
    <div key={todo.id} style={{ backgroundColor: "#e2e8f0" }}>
      <button
        onClick={onDeleteHandler}
        style={{ color: "#e53e3e", margin: "20px" }}
      >
        DEL
      </button>
      <span
        onClick={onToggleHandler}
        style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
      >
        {todo.task}
      </span>
    </div>
  );
}

function TodoPage() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAllTodos().then(todos => {
      setTodos(todos);
      setLoading(false);
    });
  }, []);

  const newInputHandler = todoText => {
    createTodo({ task: todoText }).then(newTodo => {
      setTodos([...todos, newTodo]);
    });
  };

  const onDeleteHandler = id => {
    deleteTodo(id).then(() => {
      let filteredTodos = todos.filter(todo => {
        return todo.id !== id;
      });
      setTodos(filteredTodos);
    });
  };

  const onToggleDoneHander = todo => {
    toggleIsDone(todo).then(() => {
      const newTodos = todos.map(item => {
        if (item.id !== todo.id) {
          return item;
        }
        item.isDone = !item.isDone;
        return item;
      });
      setTodos(newTodos);
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App" style={{ width: "50%" }}>
      <Input onNewInput={newInputHandler} />
      <TodoList
        todos={todos}
        onDelete={onDeleteHandler}
        onToggleDone={onToggleDoneHander}
      />
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
}

export default TodoPage;
