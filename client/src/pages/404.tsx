import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className= "flex flex-col items-center">
      <h1 className='mt-10 mb-4 text-5xl text-gray-800'>
Page not fount
      </h1>
<Link href="/">
  <a className  = "px-4 py-2 blue button">Home</a>
</Link>
    </div>
  )
}

export default NotFound
