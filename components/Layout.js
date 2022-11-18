import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react'
import { Store } from '../utils/Store'

export default function Layout({ title, children }) {
  const { state, dispatch } = useContext(Store)
  const { cart } = state
  return (
    <>
      <Head>
        <title>{title ? `${title} - next-commerce` : 'next-commerce'}</title>
        <meta name='description' content='ecommerce website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex min-h-screen flex-col justify-between'>
        <header className='sticky top-0 z-50 bg-white'>
          <nav className='flex h-12 justify-between items-center shadow-md px-4'>
            <Link href='/'>
              <p className='text-lg font-bold'>next-commerce</p>
            </Link>
            <div>
              <Link href='cart'>
                <span className='px-2'>cart</span>
                {cart.cartItems.length > 0 && (
                  <span className='bg-red-600 text-white px-1'>
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </span>
                )}
              </Link>
              <Link href='login'>
                <span className='px-2'>login</span>
              </Link>
            </div>
          </nav>
        </header>
        <main className='container m-auto my-5 px-4'>{children}</main>
        <footer className='flex h-8 justify-center items-center shadow-inner'>
          <p className='text-sm'>copyright 2022, amazona</p>
        </footer>
      </div>
    </>
  )
}
