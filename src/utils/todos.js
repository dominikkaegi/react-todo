import { db } from "./base";

export const getAllTodos = () => {
  return db
    .collection("todos")
    .get()
    .then(snapshot => {
      const todos = snapshot.docs.map(item => {
        return {
          ...item.data(),
          id: item.id
        };
      });
      return todos;
    });
};

export const createTodo = ({ task, isDone = false }) => {
  return db
    .collection("todos")
    .add({
      task,
      isDone
    })
    .then(item => {
      return item.get().then(data => {
        let newTodo = {
          ...data.data(),
          id: data.id
        };
        return newTodo;
      });
    });
};

export const deleteTodo = id => {
  return db
    .collection("todos")
    .doc(id)
    .delete();
};
