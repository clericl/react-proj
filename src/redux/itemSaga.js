import {
  put,
  takeEvery
} from 'redux-saga/effects'
import {
  ADD_ITEM,
  FETCH_ITEM
} from './itemActions'
import {
  fetchFact
} from './util'

function createItemSaga() {
  function* fetchItemSaga() {
    const res = yield fetchFact()
    const fact = yield res.json()

    yield put({
      type: ADD_ITEM,
      payload: fact
    })
  }

  function* watchFetchItemSaga() {
    yield takeEvery([FETCH_ITEM], fetchItemSaga)
  }

  return {
    watchFetchItemSaga
  }
}

export default createItemSaga
