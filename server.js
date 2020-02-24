const express = require("express");
const server = express();

const ProjectsRouter = require("./projects/projects-router.js");
const ResourcesRouter = require("./resources/resources-router.js");
const TasksRouter = require("./tasks/tasks-router.js");

server.use(express.json());
server.get("/", (req, res) =>
  res.send("<h1>Welcome to this sprint challenge!</h1>")
);
server.use("/api/projects", ProjectsRouter);
server.use("/api/resources", ResourcesRouter);
server.use("/api/tasks", TasksRouter);

module.exports = server;