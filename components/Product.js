import Link from 'next/link'

export default function Product({ product }) {
  return (
    <div className='card'>
      <Link href={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} className=' shadow' />
      </Link>
      <div className='flex flex-col items-center p-4'>
        <h4 className='text-2xl font-semibold'>{product.name}</h4>
        <p className='mb-2'>{product.brand}</p>
        <p className='font-bold'>${product.price}</p>
        <button className='primary-btn'>add to cart</button>
      </div>
    </div>
  )
}
