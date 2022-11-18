import Link from 'next/link'
import Layout from '../components/Layout'

const Login = () => {
  return (
    <div>
      <Layout title='login'>
        <div className='flex justify-center items-center flex-col'>
          <h2 className='text-2xl font-semibold mb-2'>Login</h2>
          <form>
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
              <button className='primary-btn w-full'>login</button>
            </div>
          </form>
          <p className='mt-2'>
            Don't have an account?{' '}
            <Link href='register'>
              <p className='text-blue-400'>Register</p>
            </Link>
          </p>
        </div>
      </Layout>
    </div>
  )
}
export default Login
