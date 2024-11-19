const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos();
    },
    addTodo: async (todoListItem) => {
      return await repository.addTodo(todoListItem);
    },
  };
};

module.exports = todoService;
