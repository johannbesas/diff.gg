import React from 'react'

function Header() {
  return (<>
    <div className='
    text-center text-black
    p-6
    bg-gradient-to-r from-blue-400 to-red-400
    flex flex-auto
    w-auto
    sm:text-xl
    md:text-2xl
    lg:text-4xl
    xl:text-6xl
    2xl:text-6xl'>
      <div className='flex-1'>
        <h1 className=''><a href='/'>Diff.gg</a></h1>
      </div>

      {/* <div className='md:flex items-center justify-end md:flex-1 lg:w-0'>
        <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
          Create Account
        </a>
        <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
          Log In
        </a>
      </div> */}


      {/* <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
          Create Account
        </a>
        <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
          Log In
        </a>
      </div> */}
    </div>
  </>
  )
}

export default Header
