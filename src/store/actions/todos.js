import * as actionTypes from './actionTypes'
import axios from 'axios'

// This represents the actual dispatch of the asynchronous action

const getTodos = todos => {
  return {
    type: actionTypes.LOAD,
    todos: todos
  }
}

const saveTodo = todos => {
  return {
    type: actionTypes.ADD,
    todos: todos
  }
}

const checkTodo = todos => {
  return {
    type: actionTypes.CHECK,
    todos: todos
  }
}

export const removeTodo = todos => {
  return {
    type: actionTypes.DELETE,
    todos: todos
  }
}

export const loadTodos = () => {
  // BE
  return async (dispatch, getState) => {
    const todos = (
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}/todos`)
    ).data.data
    dispatch(getTodos(todos))
  }
}

export const storeTodo = name => {
  // BE
  return async (dispatch, getState) => {
    const todo = {
      name: name,
      done: false
    }
    const todos = (
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/todos/add`, {
        todo
      })
    ).data.data
    dispatch(saveTodo(todos))
  }
}

export const storeChecked = (_id, checked) => {
  // BE
  return async (dispatch, getState) => {
    const todos = (
      await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/todos/checked/${_id}/${checked}`
      )
    ).data.data
    dispatch(checkTodo(todos))
  }
}

export const deleteTodo = _id => {
  return async (dispatch, getState) => {
    const todos = (
      await axios.delete(
        `${process.env.REACT_APP_BACKEND_URL}/todos/delete/${_id}`
      )
    ).data.data
    dispatch(removeTodo(todos))
  }
}
