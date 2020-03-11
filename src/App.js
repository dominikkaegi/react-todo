import React, { useState } from "react";

// function Input(props) {
//   const { onNewInput } = props;

//   const [input, setInput] = useState("");
//   const inputChangeHandler = event => {
//     setInput(event.target.value);
//   };

//   const submitHandler = event => {
//     event.preventDefault();
//     if (input.length === 0) {
//       return;
//     }
//     onNewInput(input);
//     setInput("");
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <input
//         type="text"
//         placeholder="Add new todo"
//         value={input}
//         onChange={inputChangeHandler}
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// }

// function TodoList(props) {
//   const { todos, onDelete } = props;

//   if (todos.length === 0) {
//     return <div>No todos</div>;
//   }

//   return (
//     <div style={{ margin: "20px" }}>
//       {todos.map(todo => {
//         return <TodoListItem todo={todo} onDelete={onDelete} />;
//       })}
//     </div>
//   );
// }

// function TodoListItem(props) {
//   const { todo, onDelete } = props;

//   const onDeleteHandler = () => {
//     onDelete(todo.id);
//   };

//   return (
//     <div key={todo.id} style={{ backgroundColor: "grey" }}>
//       <button
//         onClick={onDeleteHandler}
//         style={{ backgroundColor: "green", margin: "20px" }}
//       >
//         DEL
//       </button>
//       {todo.task}
//     </div>
//   );
// }

// function App() {
//   const [todos, setTodos] = useState([]);

//   const newInputHandler = todo => {
//     const newTodo = {
//       id: Math.random() * 100000,
//       task: todo
//     };
//     setTodos([...todos, newTodo]);
//   };

//   const onDeleteHandler = id => {
//     let filteredTodos = todos.filter(todo => {
//       return todo.id !== id;
//     });
//     setTodos(filteredTodos);
//   };

//   return (
//     <div>
//       <Input onNewInput={newInputHandler} />
//       <TodoList todos={todos} onDelete={onDeleteHandler} />
//       <pre>{JSON.stringify(todos, null, 2)}</pre>
//     </div>
//   );
// }

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Todo from "./pages/Todo";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Todo />
            </Route>
            <PrivateRoute exact path="/home">
              <Home />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              Signup
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
