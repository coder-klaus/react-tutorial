import { memo } from 'react'
import { ChildWrapper } from './style'

const Child = memo(() => {
  return (
    <ChildWrapper>
      <div>默认值</div>
    </ChildWrapper>
  )
})

export default Child