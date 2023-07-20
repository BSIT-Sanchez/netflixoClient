import React from 'react'
import { BiHomeAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='flex-colo gap-8 w-full h-screen text-white bg-main lg:py-20 py-10 px-6'>
      <img src="/images/404.svg" alt='not found' className='w-full h-96 object-contain'/>
      <h1 className="lg:text-4xl font-bold">Page Not Found</h1>
      <p className="font-medium text-border italic leading-6">
        The page you are looking for not exist. You may have mistyped the URL
      </p>
      <Link to="/" className='bg-subMain transitions text-white flex-rows gap-4  hover:text-main font-medium py-2 px-4 rounded-md'>
        <BiHomeAlt/> Back to Home
      </Link>
    </div>
  )
}

export default NotFound