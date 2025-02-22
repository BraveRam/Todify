import mongoose from "mongoose"

const schema = new mongoose.Schema({
  todoName: {
    type: String,
    required: true
  }, 
  description: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true
  }
}, 
  {
    timestamps: true
  }
)

export const Todo = mongoose.models.Todos || mongoose.model("Todos", schema);