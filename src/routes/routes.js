const express = require("express");
const router = express.Router();

// Routers
const taskRouter = require("./task-route");


//task Routes
router.use("/api/task", taskRouter);

// unknown Routes
router.all("*", (req, res) => {
  res.status(404).send(`Url:${req.originalUrl} Not Found.`);
});

module.exports = router;
