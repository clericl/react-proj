import {
  RECEIVE_TODO,
  EDIT_TODO,
  DELETE_TODO
} from './actions'

const defaultState = {
  todos: []
}

function todoReducer(state = defaultState, action) {
  let newTodos

  switch (action.type) {
    case RECEIVE_TODO:
      newTodos = state.todos.slice()
      newTodos.push(action.payload)

      return {
        ...state,
        todos: newTodos
      }

    case EDIT_TODO:
      newTodos = state.todos.slice()
      const indexToEdit = state.todos.findIndex((todo) => todo.id === action.payload.id)
      const todoToEdit = state.todos[indexToEdit]

      if (todoToEdit) {
        newTodos[indexToEdit] = {
          ...todoToEdit,
          ...action.payload
        }
      }
      return {
        ...state,
        todos: newTodos
      }

    case DELETE_TODO:
      newTodos = state.todos.filter((todo) => todo.id !== action.payload)
      return {
        ...state,
        todos: newTodos
      }

    default:
      return state
  }
}

export default todoReducer
