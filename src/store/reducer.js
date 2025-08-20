import { COUNT_DECREMENT, COUNT_INCREMENT } from './consts'

export function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case COUNT_INCREMENT:
      return {
        ...state,
        count: state.count + action.payload.step
      }
    case COUNT_DECREMENT:
      return {
        ...state,
        count: state.count - action.payload.step
      }
    default:
      return state
  }
}