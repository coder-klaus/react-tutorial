import { memo } from 'react'
import { useParams, useSearchParams, useLocation } from 'react-router-dom'

const Product = memo(() => {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const location = useLocation()


  console.log(id)
  console.log(searchParams)
  console.log(location)

  return (
    <>
      <h2>Product</h2>
      <p>id: {id}</p>
      <p>searchParams: {searchParams.get('name')}</p>
      <p>location: {location.pathname}</p>
    </>
  )
})

export default Product