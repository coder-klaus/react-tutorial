import createStore from './createStore'
import applyMiddleware from './applyMiddleware'
import { thunk } from './middlewares/thunk'
import { log } from './middlewares/log'

export { createStore, applyMiddleware, thunk, log }