import {
  put,
  takeEvery
} from 'redux-saga/effects'
import {
  ADD_DOG_FACT,
  RECEIVE_DOG_FACT
} from './actions'
import {
  fetchDogFact
} from '../util/fetch'

function createDogSaga() {
  function* fetchDogFactSaga() {
    const res = yield fetchDogFact()
    const fact = yield res.json()

    yield put({
      type: RECEIVE_DOG_FACT,
      payload: fact
    })
  }

  function* watchFetchDogFactSaga() {
    yield takeEvery([ADD_DOG_FACT], fetchDogFactSaga)
  }

  return {
    watchFetchDogFactSaga
  }
}

export default createDogSaga
