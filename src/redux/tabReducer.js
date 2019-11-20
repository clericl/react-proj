import {
  SET_ACTIVE_TAB
} from './actions'

const defaultState = {
  activeTab: null
}

function tabReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload
      }

    default:
      return state
  }
}

export default tabReducer
