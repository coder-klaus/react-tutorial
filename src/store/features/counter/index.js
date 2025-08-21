import { COUNT_INCREMENT, COUNT_DECREMENT } from './consts'

export default function reducer(state = { count: 0 }, { type, payload }) {
  switch (type) {
    case COUNT_INCREMENT:
      return { count: state.count + (payload?.step ?? 1) }
    case COUNT_DECREMENT:
      return { count: state.count - (payload?.step ?? 1) }
    default:
      return state
  }
}