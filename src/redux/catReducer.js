import {
  RECEIVE_CAT_FACT,
  DELETE_CAT_FACT
} from './actions'

const defaultState = {
  facts: []
}

let index = 1

function catReducer(state = defaultState, action) {
  let newFacts

  switch (action.type) {
    case RECEIVE_CAT_FACT:
      newFacts = state.facts.slice()
      newFacts.push({
        ...action.payload,
        id: index++
      })

      return {
        ...state,
        facts: newFacts
      }

    case DELETE_CAT_FACT:
      newFacts = state.facts.filter((fact) => fact.id !== action.payload)
      return {
        ...state,
        facts: newFacts
      }

    default:
      return state
  }
}

export default catReducer
