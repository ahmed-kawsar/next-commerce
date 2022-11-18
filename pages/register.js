import Link from 'next/link'
import Layout from '../components/Layout'

export default function Register() {
  return (
    <div>
      <Layout title='register'>
        <div className='flex justify-center items-center flex-col'>
          <h2 className='text-2xl font-semibold mb-2'>Register</h2>
          <form>
            <input
              type='text'
              className='block mb-3 rounded-md p-2 border border-blue-300'
              placeholder='username'
            />
            <input
              type='email'
              className='block mb-3 rounded-md p-2 border border-blue-300'
              placeholder='email'
            />
            <input
              type='password'
              className='block mb-3 rounded-md p-2 border border-blue-300'
              placeholder='password'
            />
            <div className='flex items-center justify-center'>
              <button className='primary-btn w-full'>register</button>
            </div>
          </form>
          <p className='mt-2'>
            Already have an account?
            <Link href='login'>
              <p className='text-blue-400'>Login</p>
            </Link>
          </p>
        </div>
      </Layout>
    </div>
  )
}
