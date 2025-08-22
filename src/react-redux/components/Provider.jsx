import { memo } from 'react'
import StoreContext from '../context/StoreContext'

const Provider = memo((props) => {
  return <StoreContext.Provider value={props.store}>{props.children}</StoreContext.Provider>
})

export default Provider

