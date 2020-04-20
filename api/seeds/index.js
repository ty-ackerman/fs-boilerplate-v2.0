const mongoose = require('mongoose')

//db-name should match that in constants.js
const { DB_URI } = require('../utils/constants')

// Import all models
const { Todo } = require('../models/Todo')

// Import created seeds
const todos = require('./todos')

// Delete existing seeds
const truncateDatabaseTodo = async () => Promise.all([Todo.deleteMany()])

// Make seeds
const makeSeeds = async () => {
  // Connect to db
  await mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  // Clear dbs
  await truncateDatabaseTodo()

  // Iterate through array of seeds and save
  await Promise.all(todos.map(todo => todo.save()))

  // This is commented out, but if the seed isn't an array, save like this:
  // await todos.save();

  // Disconnect from db
  mongoose.connection.close()
}

makeSeeds()
