import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import {Link} from 'react-router-dom';


function Navbar() {
    const [toggle,setToggle]=useState(false);

    //test comment
  return (
    <div className='bg-primary fixed  w-full top-[0px] z-20 px-4 '>
        <div className=' max-w-[1240px] py-[15px] items-center flex justify-between  mx-auto'>
        <div className='font-bold text-white z-20 text-[20px]'>achaltyagi.com</div>{
        !toggle ?   <AiOutlineMenu onClick={()=> setToggle(!toggle)} className='text-white text-2xl  md:hidden block' />
        : <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-white text-2xl  md:hidden block' />
      }
            <ul className='hidden md:flex flex text-white gap-10'>
                <li>Home</li>
                <li><Link to="#works">Works</Link></li>
                <li><Link to="#exp">Experience</Link></li>
                <li><Link to="#connect">Connect</Link></li>
            </ul>

            <ul className={`duration-300 md:hidden w-full h-screen z-20 text-white fixed bg-black top-[60px]
        ${toggle ? 'left-[0%]' : 'left-[-100%]'}
      `}>
        <li className='p-5'>Home</li>
        <li className='p-5'>Company</li>
        <li className='p-5'>Resources</li>
        <li className='p-5'>About</li>
        <li className='p-5'>Contac</li>
        
      </ul>
        </div>
    </div>
  )
}

export default Navbar