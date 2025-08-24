import { COUNT_DECREMENT, COUNT_INCREMENT } from './consts'

function delay(time = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

export function increment(step = 1) {
  return async (dispatch) => {
    await delay()
    dispatch({
      type: COUNT_INCREMENT,
      payload: {
        step
      }
    })
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
