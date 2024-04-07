const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
  {
    taskName: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      required: true,
    },

  },
  { timestamps: true }
);

const Task = model("task", taskSchema);

module.exports = Task;
