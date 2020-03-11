import React, { useState } from "react";

const initialTodos = [
  {
    task: "Workout at 7 am",
    isDone: false,
    id: "1"
  },
  {
    task: "Prepare React Course",
    isDone: false,
    id: "2"
  },
  {
    task: "Eat chocolate",
    isDone: false,
    id: "3"
  }
];

const Todo = () => {
  const [todos, setTodos] = useState(initialTodos);

  const newTodoHandler = newTodo => {
    setTodos([...todos, newTodo]);
  };

  const deleteHandler = id => {
    setTodos(todos => todos.filter(item => item.id !== id));
  };

  const toggleDoneHandler = id => {
    setTodos(todos =>
      todos.map(item => {
        if (item.id === id) {
          item.isDone = !item.isDone;
        }
        return item;
      })
    );
  };
  return (
    <>
      <div className="flex justify-center align-center font-sans">
        <div className="w-2/6 md:w-3/6">
          <div className="bg-gray-100 p-5 rounded shadow-lg mt-5">
            <div>
              <TodoInput onNewTodo={newTodoHandler} />
            </div>
            <div className={"mt-5"}>
              <TodoList
                todos={todos}
                onDelete={deleteHandler}
                onToggleDone={toggleDoneHandler}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <pre>
        {JSON.stringify(
          {
            input,
            todos
          },
          null,
          2
        )}
      </pre> */}
    </>
  );
};

const TodoInput = ({ onNewTodo }) => {
  const [input, setInput] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    if (input.length > 0) {
      let newTodo = {
        task: input,
        isDone: false,
        id: Math.floor(Math.random() * 1000000)
      };

      onNewTodo(newTodo);
      setInput("");
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="flex">
        <input
          name="todo"
          className="bg-gray-200 rounded rounded-r-none p-3 flex-grow text-gray-700"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Get things done...."
        />
        <button
          type="submit"
          className="p-3 bg-gray-300 rounded rounded-l-none text-green-600"
        >
          Add
        </button>
      </form>
    </div>
  );
};

const TodoList = ({ todos, onToggleDone, onDelete }) => {
  if (todos.length === 0) {
    return <div className="">No Todos</div>;
  }

  return (
    <div className="mt-5">
      {todos.map(todo => {
        return (
          <div
            name="todo"
            className="bg-gray-200 text-gray-700 border-b-2 flex rounded"
            key={todo.id}
          >
            <button
              onClick={() => onDelete(todo.id)}
              className="p-3 text-red-400"
            >
              DEL
            </button>
            <span
              onClick={() => onToggleDone(todo.id)}
              className={`inline-block cursor-pointer select-none p-3 pl-0 ${
                todo.isDone ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.task}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
