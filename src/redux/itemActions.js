import {
  fetchFact
} from './util'

export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const EDIT_ITEM = 'EDIT_ITEM'
export const FETCH_ITEM = 'FETCH_ITEM'

export const fetchItem = () => ({
  type: FETCH_ITEM
})

export const deleteItem = (itemId) => ({
  type: DELETE_ITEM,
  payload: itemId
})

export const editItem = (editedItem) => ({
  type: EDIT_ITEM,
  payload: editedItem
})
