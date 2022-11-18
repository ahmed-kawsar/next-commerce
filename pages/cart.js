import Link from 'next/link'
import { useContext } from 'react'
import Layout from '../components/Layout'
import { Store } from '../utils/Store'

export default function Cart() {
  const { state, dispatch } = useContext(Store)
  const {
    cart: { cartItems },
  } = state
  return (
    <Layout title='Shopping Cart'>
      <h1 className='text-xl mb-4'>Shoppin Cart</h1>
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href='/'>Go Shopping</Link>
        </div>
      ) : (
        <div className='grid md:grid-cols-4 md:gap-5'>
          <div>h</div>
        </div>
      )}
    </Layout>
  )
}
