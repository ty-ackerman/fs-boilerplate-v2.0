import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  todos: []
}

const storeTodo = (state, action) => {
  const todos = state.todos.concat({
    name: action.name,
    done: false,
    _id: new Date().getTime()
  })
  return updateObject(state, { todos })
}

const checkTodo = (state, action) => {
  const todos = state.todos.map(todo => {
    if (todo._id === action._id) {
      todo.done = !todo.done
    }
    return todo
  })
  return updateObject(state, { todos })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return storeTodo(state, action)
    case actionTypes.DELETE:
      return updateObject(state, {
        todos: state.todos.filter(todo => action._id !== todo._id)
      })
    case actionTypes.CHECK:
      return checkTodo(state, action)
    default:
      return state
  }
}

export default reducer
