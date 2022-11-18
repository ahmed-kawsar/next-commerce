import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import data from '../../utils/data'
import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import { Store } from '../../utils/Store'

export default function ProductScreen() {
  const { state, dispatch } = useContext(Store)
  const { query } = useRouter()
  const { slug } = query
  const product = data.products.find((x) => x.slug === slug)
  if (!product) {
    return (
      <div>
        <p>Product Not Found</p>
        <Link href='/'>Back to Home</Link>
      </div>
    )
  }
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find(
      (item) => item.slug === product.slug
    )
    const quantity = existItem ? existItem.quantity + 1 : 1
    if (product.countInStock < quantity) {
      alert('Sorry, Product is out of stock')
      return
    }
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity: quantity },
    })
  }
  return (
    <div>
      <Layout title={product.name}>
        <div className='mb-2'>
          <Link href='/'>back to products</Link>
        </div>
        <div className='grid md:grid-cols-4 md:gap-3'>
          <div className='md:col-span-2'>
            <Image
              src={product.image}
              alt={product.name}
              width={640}
              height={640}
              priority
            />
          </div>
          <div>
            <ul>
              <li>
                <h1 className='text-lg font-bold'>{product.name}</h1>
              </li>
              <li>Category: {product.category}</li>
              <li>Brand: {product.brand}</li>
              <li>
                {product.rating} of {product.numReviews} reviews
              </li>
              <li>Description: {product.description}</li>
            </ul>
          </div>
          <div className='p-5 shadow h-36'>
            <div className='mb-2 flex justify-between'>
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className='mb-2 flex justify-between'>
              <div>Status</div>
              <div>{product.countInStock > 0 ? 'In stock' : 'Unavailable'}</div>
            </div>
            <button
              className='primary-btn w-full mt-2'
              onClick={addToCartHandler}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Layout>
    </div>
  )
}
