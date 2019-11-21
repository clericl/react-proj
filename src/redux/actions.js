export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB'
export const ADD_DOG_FACT = 'ADD_DOG_FACT'
export const FETCH_DOG_FACT = 'FETCH_DOG_FACT'
export const RECEIVE_DOG_FACT = 'RECEIVE_DOG_FACT'
export const DELETE_DOG_FACT = 'DELETE_DOG_FACT'
export const ADD_CAT_FACT = 'ADD_CAT_FACT'
export const FETCH_CAT_FACT = 'FETCH_CAT_FACT'
export const RECEIVE_CAT_FACT = 'RECEIVE_CAT_FACT'
export const DELETE_CAT_FACT = 'DELETE_CAT_FACT'
export const ADD_TODO = 'ADD_TODO'
export const RECEIVE_TODO = 'RECEIVE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export function addDogFact() {
  return {
    type: ADD_DOG_FACT
  }
}

export function deleteDogFact(id) {
  return {
    type: DELETE_DOG_FACT,
    payload: id
  }
}

export function addCatFact() {
  return {
    type: ADD_CAT_FACT
  }
}

export function deleteCatFact(id) {
  return {
    type: DELETE_CAT_FACT,
    payload: id
  }
}

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo
  }
}

export function editTodo(todo) {
  return {
    type: EDIT_TODO,
    payload: todo
  }
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export function setActiveTab(tabName) {
  return {
    type: SET_ACTIVE_TAB,
    payload: tabName
  }
}
