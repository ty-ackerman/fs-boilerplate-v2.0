const { Todo } = require('../models/Todo')

const todos = []

const todo1 = new Todo({
  done: true,
  name: 'Set up BE'
})

const todo2 = new Todo({
  done: false,
  name: 'Add Redux Support'
})

todos.push(todo1)
todos.push(todo2)

module.exports = todos
