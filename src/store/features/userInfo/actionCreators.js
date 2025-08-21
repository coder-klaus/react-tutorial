import { SET_USER_INFO, SET_USER_INFO_NAME, SET_USER_INFO_AGE } from './consts'

export const setUserInfoAction = payload => ({ type: SET_USER_INFO, payload })
export const setUserInfoNameAction = payload => ({ type: SET_USER_INFO_NAME, payload })
export const setUserInfoAgeAction = payload => ({ type: SET_USER_INFO_AGE, payload })