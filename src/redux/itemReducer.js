import {
  ADD_ITEM,
  EDIT_ITEM,
  DELETE_ITEM
} from './itemActions'

const defaultState = {
  items: []
}

let index = 1

function itemReducer(state = defaultState, action) {
  let newItems

  switch (action.type) {
    case ADD_ITEM:
      newItems = state.items.slice()
      newItems.push({
        ...action.payload,
        id: index++
      })

      return {
        ...state,
        items: newItems
      }

    case EDIT_ITEM:
      newItems = state.items.slice()
      const indexToEdit = state.items.findIndex((item) => item.id === payload.id)
      if (itemToEdit) {
        newItems[indexToEdit] = action.payload
      }
      return {
        ...state,
        items: newItems
      }

    case DELETE_ITEM:
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
