import { combineReducers } from 'redux'
import tabs from './tabReducer'
import cats from './catReducer'
import dogs from './dogReducer'
import todos from './todoReducer'

const rootReducer = combineReducers({
  tabs,
  cats,
  dogs,
  todos
})

export default rootReducer
