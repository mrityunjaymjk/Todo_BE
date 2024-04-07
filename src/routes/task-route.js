const express = require("express");
const router = express.Router();

const taskController = require("../controllers/task-controller");

// Add task
router.post("/add", taskController.addTask );

//Get task
router.get("/tasks", taskController.getTasks );

//update task
router.put("/updateTask/:id", taskController.updateTask );

//dalete task
router.delete("/deleteTask/:id", taskController.deleteTask );





//handling unknown routes.
router.all("*", (req, res) => {
  res.status(404).send(`Url:${req.originalUrl} Not Found.`);
});

module.exports = router;
