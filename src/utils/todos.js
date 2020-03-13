import { db } from "./base";

export const getAllTodos = userId => {
  return db
    .collection(`users/${userId}/todos`)
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

export const createTodo = (userId, { task, isDone = false }) => {
  return db
    .collection(`users/${userId}/todos`)
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

export const deleteTodo = (userId, id) => {
  return db
    .collection(`users/${userId}/todos`)
    .doc(id)
    .delete();
};

export const toggleIsDone = (userId, todo) => {
  return db
    .collection(`users/${userId}/todos`)
    .doc(todo.id)
    .update({ isDone: !todo.isDone });
};
