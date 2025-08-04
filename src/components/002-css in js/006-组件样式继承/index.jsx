import { memo } from 'react'
import { PrimaryButtonWrapper, ButtonWrapper } from './style'

const App = memo(() => {
  return (
   <>
    {/* 可以看到 继承的样式组件 是先设置了父类的样式，然后再设置自己的样式，从而实现样式覆盖 */}
    {/* <button class="sc-bRKDuR irIZrm"> 普通按钮 </button> */}
    <ButtonWrapper> 普通按钮 </ButtonWrapper>
    <hr />
    {/* <button class="sc-bRKDuR sc-hvigdm irIZrm fgerNX"> 主按钮 </button> */}
    <PrimaryButtonWrapper> 主按钮 </PrimaryButtonWrapper>
   </>
  )
})

export default App