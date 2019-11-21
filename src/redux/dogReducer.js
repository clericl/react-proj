import {
  RECEIVE_DOG_FACT,
  DELETE_DOG_FACT
} from './actions'

const defaultState = {
  facts: []
}

function dogReducer(state = defaultState, action) {
  let newFacts

  switch (action.type) {
    case RECEIVE_DOG_FACT:
      newFacts = state.facts.slice()
      newFacts.push(action.payload)

      return {
        ...state,
        facts: newFacts
      }

    case DELETE_DOG_FACT:
      newFacts = state.facts.filter((fact) => fact.id !== action.payload)
      return {
        ...state,
        facts: newFacts
      }

    default:
      return state
  }
}

export default dogReducer
