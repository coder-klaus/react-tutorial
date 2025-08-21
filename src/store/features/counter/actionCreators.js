import { COUNT_INCREMENT, COUNT_DECREMENT } from './consts'

// 1. action creator 以 Action 或 ActionCreator 为后缀，以便与普通函数进行区分
export const incrementAction = payload => ({ type: COUNT_INCREMENT, payload })
export const decrementAction = payload => ({ type: COUNT_DECREMENT, payload })