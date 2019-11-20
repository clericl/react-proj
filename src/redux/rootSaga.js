import "regenerator-runtime/runtime"
import {
  spawn
} from 'redux-saga/effects'
import createItemSaga from './itemSaga'

function* rootSaga() {
  const { watchFetchItemSaga } = createItemSaga()

  yield spawn(watchFetchItemSaga)
}

export default rootSaga
