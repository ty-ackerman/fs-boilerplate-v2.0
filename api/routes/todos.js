const { Router } = require('express')
const router = Router()
const { Todo } = require('../models/Todo')

router.get('/', async (req, res, next) => {
  try {
    const docs = await Todo.find()
    res.status(200).send({ data: docs })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
