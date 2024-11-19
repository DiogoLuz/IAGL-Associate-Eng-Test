const express = require("express");
const cors = require("cors");
const repository = require("./repository/todo");
const todoService = require("./service/todo")(repository);

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.get("/api/todo", async (req, res) => {
    try {
      const todos = await todoService.getTodos();
      res.json(todos);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching todos." });
    }
  });

  server.post("/api/todo", async (req, res) => {
    const { task } = req.body;

    // Error checking: Ensure 'task' is provided and not empty
    if (!task || task.trim() === "") {
      return res
        .status(400)
        .json({ error: "Task is required and cannot be empty." });
    }

    try {
      const newTodo = await todoService.addTodo(req.body);
      res.status(201).json(newTodo); // Respond with the newly added todo
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while adding the todo." });
    }
  });

  /**
  POST /api/todo
  {
    "task": "Some task"
  }

  Response:
  {
    "task": "Some task"
  }
  **/

  return server;
};

module.exports = server;
