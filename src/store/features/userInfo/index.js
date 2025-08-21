import { SET_USER_INFO, SET_USER_INFO_NAME, SET_USER_INFO_AGE } from './consts'

export default function reducer(state = {  }, { type, payload }) {
  switch (type) {
    case SET_USER_INFO:
      return {  ...payload }
    case SET_USER_INFO_NAME:
      return {  ...state, name: payload.name }
    case SET_USER_INFO_AGE:
      return {  ...state, age: payload.age }
    default:
      return state
  }
}