import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-center flex flex-col justify-between  w-full'>
        <div className="logo font-bold text-white ">
            <span className='text-green-700'>  &lt;</span>
            <span> Pass</span>
            <span className='text-green-500'>OP/&gt;</span>
            </div>
      <div className='flex justify-center items-center text-white'>Created with <img className='w-7 mx-2 ' src="icons/heart.png" alt="" /> by Shivcharan</div>
    </div>
  )
}

export default Footer
