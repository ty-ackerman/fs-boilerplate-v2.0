const fs = require('fs')

const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')

const { PORT, DB_URI } = require('./utils/constants')

const app = express()

// app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Here are all the target routes
app.use('/healthcheck', require('./routes/index').router)
app.use('/todos', require('./routes/todos'))

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, err => {
      console.log(err)
    })
  }
  if (res.headerSent) {
    return next(error)
  }
  res.status(error.code || 500)
  res.json({ message: error.message || 'An unknown error occurred!' })
})

app.listen(PORT, async () => {
  await mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  console.log(`App listening on port ${PORT}`)
})

module.exports = app
