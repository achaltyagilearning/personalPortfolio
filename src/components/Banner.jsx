import React from 'react'
import Typed from 'react-typed'
import photo from '../assets/achalPhoto.jpg'

function Banner() {
  return (
    <div className='w-full py-[100px]'>
    <div className='max-w-[1240px] md:my-[100px] flex md:flex-row flex-col-reverse mx-auto text-center font-bold'>
        <div className='flex-auto md:text-left text-center'>
        <h2 className='text-white text-4xl md:text-[60px] md:p-[24px]'>I am a</h2>
        <div className='text-[20px] md:text-[50px] md:px-[24px] text-white'>
            
            <Typed strings={['React Frontend Developer', 'MERN FullStack Developer','RPA Developer']}
                     typeSpeed={100} loop={true}/>
                    
        </div>
        <button className='bg-black my-[20px] md:mx-[24px] text-white p-3 rounded'>Hire Me!</button>
        </div>
        <div className='md:w-[500px] w-full '>
        <img className="md:w-60 md:h-60 w-40 h-40 mx-auto border-double border-2 border-black  rounded-full" src={photo} alt="Rounded avatar" />
       
        </div>
    </div>

</div>
  )
}

export default Banner