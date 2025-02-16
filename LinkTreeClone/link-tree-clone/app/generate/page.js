"use client"
import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useParams, useSearchParams } from 'next/navigation';
// import 'react-toastify/dist/ReactTostify.css'

const Generate = () => {
const searchParams=useSearchParams()


  // const [link, setlink] = useState("")
  // const [linktext, setLinktext] = useState("")
  const [links, setLinks] = useState([{ link: "", linktext: "" }])
  const [handle, setHandle] = useState(searchParams.get('handle'))
  const [pic, setpic] = useState("")
const [desc, setDesc] = useState("")

  const handleChange = (index, link, linktext) => {
    setLinks((initiallinks) => {
     return  initiallinks.map((item, i) => {
        if (i === index) {
          return { link, linktext }
        }
        else {
          return item
        }
      })
    }
    )
  }

  const addLink=()=>{
    setLinks(links.concat([{link:"",linktext:""}]))
  }

  const submitLink = async () => {
    //copied from postman
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "links": links,
   
      "handle": handle,
      "pic":pic,
      "desc":desc
    }
 );
 console.log(raw)
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions)
    const result = await r.json()
    if(result.success){

      toast.success(result.message)
      setLinks([])
      setpic("")
      setHandle("")
    }
    else{
    toast.error(result.message)
    }


  }
  return (
    <div className='  bg-red-100 min-h-screen grid grid-cols-2 text-gray-700'>

      <div className="col1 flex flex-col justify-center  items-center">
        <h1 className='font-bold text-4xl'>Create your BitTree</h1>

        <div className='flex flex-col gap-5'>
          <h2 className='font-semibold text-2xl'  > Step 1: Claim your handle</h2>
          <div className="mx-4">
            <input value={handle || ""} onChange={e => { setHandle(e.target.value) }} className='px-4 py-2 focus:outline-purple-400 rounded' type="text" placeholder='Choose a handle' />
          </div>
          <div className="item">


            <h2 className='font-semibold text-2xl'  > Step 2: Add your links</h2>
            {links && links.map((item, index) => {
              return (<div key={index} className="mx-4 flex  gap-5">
                <input value={item.linktext || ""} onChange={e => { handleChange(index, item.link, e.target.value) }} className=' my-2  px-4 py-2 focus:outline-purple-400 rounded' type="text" placeholder='Enter link text' />
                <input value={item.link || ""} onChange={e => { handleChange(index, e.target.value, item.linktext) }} className=' my-2  px-4 py-2 focus:outline-purple-400 rounded' type="text" placeholder='Enter link ' />
              </div>)
            })}
            <button onClick={() => { addLink() }} className='px-5 py-2  mx-2 bg-slate-700 text-white rounded-3xl fond-bold'>Add link</button>
          </div>
          <div className="item">
            <h2 className='font-semibold text-2xl'  > Step 3: Add your profile picture and description</h2>
            <div className="mx-4 flex flex-col ">
              <input value={pic || ""} onChange={e => { setpic(e.target.value) }} className=' my-2  px-4 py-2 focus:outline-purple-400 rounded' type="text" placeholder='Enter link to your profile' />
              <input value={desc || ""} onChange={e => { setDesc(e.target.value) }} className=' my-2  px-4 py-2 focus:outline-purple-400 rounded' type="text" placeholder='Enter description' />
              <button disabled={pic==""|| handle=="" ||links[0].linktext=="" ||desc==""} onClick={()=>{submitLink()}} className='px-5 py-2 my-5 mx-2 bg-slate-700 text-white rounded-3xl fond-bold disabled:bg-slate-400'>Create Your BitLink</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col2 w-full h-screen  bg-red-100">
        <img className=' background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1)); h-full object-contain ' src="/generate.png" alt="Generate your links" />

      </div>
      <ToastContainer />
    </div>
  )
}

export default Generate
