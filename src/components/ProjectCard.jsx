import React,{useState} from 'react'
import {AiFillGithub} from 'react-icons/ai'
import achalPhoto from '../assets/achalPhoto.jpg';
function ProjectCard(props){
 
  const [showFullDescription,setShowFullDescription] = useState(false);

  const colorList =['bg-orange-700', 'bg-yellow-700' , 'bg-purple-700', 'bg-green-700', 'bg-pink-700',
  'bg-sky-700','bg-cyan-700', 'bg-violet-700', 'bg-orange-700', 'bg-orange-700'];

  function getColor(){
       let x= Math.floor((Math.random() * 10));

       return colorList[x];
  };

  const showFullDescriptionHandle =(e)=>{
        console.log('inside handle');
      setShowFullDescription(!showFullDescription);
  };

  const description = showFullDescription ? props.data.description :props.data.description.slice(0,200);
 
  return (
    <div className={`max-w-[1400px] ${getColor()} h-full bg-black md:flex`}>
      <div className="md:h-full md:w-1/3 h-48 text-white m-auto justify-center flex items-center" >
          <h2 className='font-bold  text-[40px]'>{props.data.name}</h2>
      </div>
      <div className="h-full w-full bg-zinc-100 py-[20px] md:py-[10px] flex flex-col justify-center">
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