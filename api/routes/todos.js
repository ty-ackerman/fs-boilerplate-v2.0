const { Router } = require('express')
const router = Router()
const { Todo } = require('../models/Todo')

router.get('/', async (req, res, next) => {
  try {
    const docs = await Todo.find()
    res.status(200).send({ data: docs })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

router.post('/add', async (req, res, next) => {
  try {
    const todo = new Todo({
      ...req.body.todo
    })
    await todo.save()
    res
      .status(200)
      .send({ message: 'saved successfully', data: await Todo.find() })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

router.patch('/checked/:_id/:checked', async (req, res, next) => {
  try {
    const { _id, checked } = req.params
    const done = checked === 'true' ? true : false
    await Todo.findByIdAndUpdate(_id, { done })
    res.status(200).send({ message: 'success', data: await Todo.find() })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

router.delete('/delete/:_id', async (req, res, next) => {
  try {
    const { _id } = req.params
    const removedTodo = await Todo.findByIdAndRemove({ _id })
    res.status(200).send({
      message: 'deleted successfully',
      data: await Todo.find(),
      removed: removedTodo
    })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})
module.exports = router
