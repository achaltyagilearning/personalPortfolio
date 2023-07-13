import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";

function Navbar() {
    const [toggle,setToggle]=useState(false);

    //test comment
  return (
    <div className='bg-primary p-4'>
        <div className='max-w-[1240px] py-[15px] items-center  flex justify-between  mx-auto'>
        <div className='font-bold text-white text-[20px]'>achaltyagi.com</div>{
        !toggle ?   <AiOutlineMenu onClick={()=> setToggle(!toggle)} className='text-white text-2xl  md:hidden block' />
        : <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-white text-2xl  md:hidden block' />
      }
            <ul className='hidden md:flex flex text-white gap-10'>
                <li>Home</li>
                <li>Works</li>
                <li>Experience</li>
                <li>Connect</li>
            </ul>

            <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[80px]
        ${toggle ? 'left-[0%]' : 'left-[-100%]'}
      `}>
        <li className='p-5'>Home</li>
        <li className='p-5'>Company</li>
        <li className='p-5'>Resources</li>
        <li className='p-5'>About</li>
        <li className='p-5'>Contact</li>
        
      </ul>
        </div>
    </div>
  )
}

export default Navbar