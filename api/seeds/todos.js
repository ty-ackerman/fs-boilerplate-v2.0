const { Todo } = require('../models/Todo')

const todos = []

const todo1 = new Todo({
  done: true
})

const todo2 = new Todo({
  done: false
})

todos.push(todo1)
todos.push(todo2)

module.exports = todos
