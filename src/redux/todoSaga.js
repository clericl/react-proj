import {
  put,
  takeEvery
} from 'redux-saga/effects'
import {
  ADD_TODO,
  RECEIVE_TODO
} from './actions'

function createTodoSaga() {
  let index = 0

  function* addTodoSaga(action) {
    yield put({
      type: RECEIVE_TODO,
      payload: {
        ...action.payload,
        id: index++
      }
    })
  }

  function* watchAddTodoSaga() {
    yield takeEvery(ADD_TODO, addTodoSaga)
  }

  return {
    watchAddTodoSaga
  }
}

export default createTodoSaga
