'use strict'

const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Here are all the target routes
app.use('/healthcheck', require('./routes/index').router)
app.use('/todos', require('./routes/todos'))

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    const errors = [{ message: 'unauthorized' }]

    res.status(401).json({ errors })
  }
})

module.exports = app
