import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <h1 className='text-7xl flex justify-center mt-30'>Welcome to 3D world...!</h1>
      <div className='flex justify-center gap-5 mt-35 '>

        <div className="w-25 h-25 flex bg-red-700 justify-center rounded-2xl">
        <Link href={"/solarsystem"} className=' mt-9'>SolarSystem</Link>
      </div>
      <div className="w-25 h-25 flex justify-center  bg-red-700 rounded-2xl">
        <Link href={"/glob"} className='mt-9'>Glob</Link>
        
      </div>
     
      </div>
    </div>
  )
}

export default page
