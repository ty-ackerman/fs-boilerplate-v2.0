const { model, Schema } = require('mongoose')

const todoSchema = new Schema({
  done: { type: Boolean, required: true }
})

const Todo = model('Todo', todoSchema)

module.exports = { Todo, todoSchema }
