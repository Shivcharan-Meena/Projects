import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <nav className='text-white h-16 bg-purple-700 flex justify-between items-center px-3'>
                <div className="logo text-2xl font-bold">
                 
                    <Link href="/">BitLinks</Link>
                </div>
                <ul className='f text-white flex  items-center justify center gap-4'>
                    <Link href="/"> <li>Home</li>   </Link>
                    <Link href="/about"> <li>About</li>  </Link>
                    <Link href="/shorten"> <li>Shorten</li> </Link>
                    <Link href="/contact">  <li>Contact</li></Link>
                    <li className='flex gap-4'>
                        <Link href="/shorten">  <button className='bg-purple-500 shadow-lg rounded-lg  p-3 py-1'>Try Now</button></Link>
                        <Link href="/github">   <button className='bg-purple-500 shadow-lg rounded-lg p-3 py-1 '>GitHub</button></Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar
