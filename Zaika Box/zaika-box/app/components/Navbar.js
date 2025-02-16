import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const Navbar = () => {
  return (
    <div className=' h-[100px] flex justify-between items-center border-b-0 rounded-2xl p-3'>
      
      <div className="logo text-5xl font-bold"> 
        <span className='text-fuchsia-600 '>Zaika</span>Box
      </div>
      <div className='border-red-500 border-2 h-[90px] w-full'>
        <ul className='flex gap-4  justify-center '>
            <Link href="/"><li>Home</li></Link>
            <Link href="/"><li>About</li></Link>
            <Link href="/"><li>Contact us</li></Link>
        </ul>
        </div>
        <div className='flex justify-center'>
            <button>black</button>
            <div className='flex justify-center border border-red-200'>
                <button>Sign Up</button>
                <button>Log In</button>
            </div>
        </div>
     
    </div>
  )
}

export default Navbar
