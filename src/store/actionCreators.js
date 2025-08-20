import { COUNT_DECREMENT, COUNT_INCREMENT } from './consts'

export function increment(step = 1) {
  return {
    type: COUNT_INCREMENT,
    payload: {
      step
    }
  }
}

export function decrement(step = 1) {
  return {
    type: COUNT_DECREMENT,
    payload: {
      step
    }
  }
}
