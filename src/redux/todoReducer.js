import {
  ADD_TODO,
  EDIT_TODO,
  DELETE_TODO
} from './actions'

const defaultState = {
  items: []
}

let index = 1

function itemReducer(state = defaultState, action) {
  let newItems

  switch (action.type) {
    case ADD_TODO:
      newItems = state.items.slice()
      newItems.push({
        ...action.payload,
        id: index++
      })

      return {
        ...state,
        items: newItems
      }

    case EDIT_TODO:
      newItems = state.items.slice()
      const indexToEdit = state.items.findIndex((item) => item.id === action.payload.id)
      if (indexToEdit) {
        newItems[indexToEdit] = action.payload
      }
      return {
        ...state,
        items: newItems
      }

    case DELETE_TODO:
      newItems = state.items.filter((item) => item.id !== action.payload)
      return {
        ...state,
        items: newItems
      }

    default:
      return state
  }
}

export default itemReducer
