import React,{useState} from 'react'
import {AiFillGithub} from 'react-icons/ai'

function ProjectCard(props){
 
  const [showFullDescription,setShowFullDescription] = useState(!false);

  const showFullDescriptionHandle =(e)=>{
        console.log('inside handle');
      setShowFullDescription(!showFullDescription);
  };

  const description = showFullDescription ? props.data.description :props.data.description.slice(0,200);
 
  return (
    <div className='bg-green-700 max-w-[1400px] h-full bg-black md:flex'>
      <div className="md:h-full md:w-1/3  h-48" 
         style={{backgroundImage:`url(${props.data.imageUrl})`}} title="Woman holding a mug">
      </div>
      <div className="h-full w-full bg-white py-[20px] md:py-[0px] flex flex-col justify-center">
        <div className='md:mx-[20px] mx-[10px]'>
        <div className="mb-8">
      <p className="text-[18px] font-bold text-gray-400 flex items-center">
        {props.data.date}
      </p>
      <div className="text-gray-900 font-bold md:text-[40px] text-[30px] mb-2">{props.data.name}</div>
      <div className='flex flex-wrap space-x-4  my-[10px]'>
        <div className='md:px-[20px] px-[10px] py-[2px] my-[5px] bg-gray-500 text-white md:text-[20px] rounded-full'>React</div>
        <div className='md:px-[20px] px-[10px] py-[2px] my-[5px]  bg-gray-500 text-white md:text-[20px] rounded-full'>MongoDB</div>
        <div className='md:px-[20px]  px-[10px] py-[2px]  my-[5px] bg-gray-500 text-white md:text-[20px] rounded-full'>Express.js</div>        
      </div>
      
      <div className="text-gray-700 text-justify md:text-[20px] ">{description}
      <button onClick={showFullDescriptionHandle}>Read {showFullDescription ? 'Less' : 'More'}</button>
      </div>
      
    </div>

        </div>
        <div className="md:flex md:px-[20px] md:items-center  text-white">
        <button className='bg-gray-700 rounded my-[10px] md:mx-[10px] mx-auto py-[5px] px-[10px] md:text-[20px] flex items-center'>
            <AiFillGithub size={20} className='mx-[5px]' to={props.data.githubLink} />View on github</button>
        <button to={props.data.previewLink} className='bg-secondary rounded md:mx-[10px] my-[10px] mx-auto py-[5px] px-[10px] md:text-[20px] flex items-center'>
          Preview</button>
    </div>

      </div>     
      </div>
    
);
}


export default ProjectCard