import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import * as actionCreators from '../store/actions/index'

function Todos (props) {
  const [name, setName] = useState('')

  useEffect(() => {
    props.onLoadTodos()
  }, [])

  const handleChange = e => setName(e.target.value)

  return (
    <div>
      <hr />
      <h1>Test Todos</h1>
      <p>*Test component to verify Redux + BE is working*</p>
      <div>
        <input type='text' placeholder='Enter To Do' onChange={handleChange} />
        <button onClick={() => props.onAddTodo(name)}>Add Todo</button>
      </div>
      <h1>All Todos</h1>
      <ul>
        {props.todos.map(todo => {
          return (
            <div key={todo._id}>
              <input
                type='checkbox'
                checked={todo.done}
                id={todo._id}
                onChange={() => props.onCheckTodo(todo._id, !todo.done)}
              />
              <label style={{ margin: '20px' }} htmlFor={todo._id}>
                {todo.name}
              </label>
              <button onClick={() => props.onDeleteTodo(todo._id)}>
                Delete
              </button>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.tds.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: name => dispatch(actionCreators.storeTodo(name)),
    onDeleteTodo: id => dispatch(actionCreators.deleteTodo(id)),
    onCheckTodo: (id, checked) =>
      dispatch(actionCreators.storeChecked(id, checked)),
    onLoadTodos: () => dispatch(actionCreators.loadTodos())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
