const Task = require("../models/task-model");

const addTask = async (req, res) => {
  try {
    let { taskName, isDone } = req.body;
    await Task.create({
      taskName,
      isDone,
    });
    res.status(200).json({ message: "task added successfully" });
  } catch (error) {
    res.status(500).json({ message: "failed", error });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json(tasks);
  } catch (err) {
    return res.status(500).json(err);
  }
};

const updateTask = async (req, res) => {
  try {
    let { id } = req.params;
    let data = req.body;
    const item = await Task.findById(id);
    if (data?.taskName) item.taskName = data.taskName;
    if (data.isDone !== null) item.isDone = data.isDone;

    await item.save();
    return res.status(200).json({ message: "Tasks saved successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Something wrong happen", error });
  }
};

const deleteTask = async (req, res) => {
  try {
    let { id } = req.params;
    const item = await Task.findById(id);
    await item.remove();
    return res.status(200).json({ message: "Tasks removed successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Something wrong happen", error });
  }
};

module.exports = {
  addTask,
  getTasks,
  updateTask,
  deleteTask,
};
