import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'

const initialState = {
  todos: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return updateObject(state, { todos: action.todos })
    case actionTypes.DELETE:
      return updateObject(state, { todos: action.todos })
    case actionTypes.CHECK:
      return updateObject(state, { todos: action.todos })
    case actionTypes.LOAD:
      return updateObject(state, { todos: action.todos })
    default:
      return state
  }
}

export default reducer
