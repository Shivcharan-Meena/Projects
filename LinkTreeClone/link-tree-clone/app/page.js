"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [text, settext] = useState("")
  const router=useRouter();


  const createTree=() => {
    router.push(`/generate?handle=${text}`)
  }


  return (
    <main>
      <section className="bg-[#254f1a] min-h-[100vh] grid grid-cols-2">
        <div className=" flex flex-col  justify-center ml-[10vw] gap-3">
        <p className="text-[#d2e823] font-bold text-7xl ">Everything you</p>
        <p className="text-[#d2e823] font-bold text-7xl ">are. In one, </p>
        <p className="text-[#d2e823] font-bold text-7xl my-4">simple link in bio.</p>
          <p className="text-[#d2e823] font-bold">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>

          <div className="input flex gap-2">
            <input   onChange={(e)=>settext(e.target.value)}className="px-2 py-2 focus:outline-green-800" type="text" placeholder="Enter your handle" />
            <button onClick={()=>{createTree()}} className="text-white bg-pink-300 rounded-full font-bold px-3">Claim your BitTree</button>
          </div>
        
        </div>
       <div className="  flex flex-col items-center justify-center mr-[10vw] text-xl">
       <img src="/home.png" alt="home page iamge" width="400px" height="400px"/>
       </div>
    
      </section>
      <section className="bg-red-700 min-h-[100vh]">
        
      
      </section>
    </main>
  );
}
