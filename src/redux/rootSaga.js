import "regenerator-runtime/runtime"
import {
  spawn
} from 'redux-saga/effects'
import createCatSaga from './catSaga'
import createDogSaga from './dogSaga'
import createTodoSaga from './todoSaga'

function* rootSaga() {
  const { watchFetchCatFactSaga } = createCatSaga()

  yield spawn(watchFetchCatFactSaga)

  const { watchFetchDogFactSaga } = createDogSaga()

  yield spawn(watchFetchDogFactSaga)

  const { watchAddTodoSaga } = createTodoSaga()

  yield spawn(watchAddTodoSaga)
}

export default rootSaga
