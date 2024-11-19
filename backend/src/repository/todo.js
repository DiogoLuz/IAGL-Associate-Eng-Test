let todoList = {
  todos: [],
};

module.exports = {
  getTodos: () => Promise.resolve(todoList),
  addTodo: (todoListItem) => {
    todoList.todos.push(todoListItem);
    return Promise.resolve(todoList);
  },
};
