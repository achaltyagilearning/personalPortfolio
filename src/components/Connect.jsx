import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'


function Connect() {
  return (
    <div className="my-[20px] shadow-md rounded mx-auto max-w-[1240px]" id="connect">
        <h2 className='font-bold text-4xl md:text-[40px] text-center'>Connect with me</h2>
  <form className="px-8 pt-6 pb-8 mb-4 text-center">
    <div className='flex space-x-4 justify-center'>
    <div className="mb-4">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
      id="Name" type="text" placeholder="Name" />
    </div>
    <div className="mb-6">
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      id="emailID" type="email" placeholder="Email" />
    </div>
    </div>
    
    <textarea  className="bg-gray-200 max-w-[800px] appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        rows="4"
        cols="50"
        placeholder='Type your message here'
    />
    <div className="my-4 flex justify-center">
      <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Send Message
        <AiOutlineSend className='mx-[2px]'/>
      </button>
    </div>
  </form>
</div>
  );
}

export default Connect