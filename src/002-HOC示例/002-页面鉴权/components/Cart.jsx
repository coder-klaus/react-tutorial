import { memo } from 'react'
import { withAuth } from '../hoc/withAuth'

const Cart = memo(() => {
  return (
    <div> 这是购物车页面 </div>
  )
})

export default withAuth(Cart)