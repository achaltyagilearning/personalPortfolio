import React,{useEffect, useState} from 'react'

import {AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai";
import {BsDot} from "react-icons/bs";
import ProjectCard from './ProjectCard';

function Slider() {

    const slides =[
        {
            id:"1",
            name:"FoodApp",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            date:"Aug 2023",
            githubLink:"",
            previewLink:"",
            imageUrl:"https://source.unsplash.com/600x300/?food"
        },
        {
            id:"2",
            name:"NetflixApp",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            date:"July 2022",
            githubLink:"",
            previewLink:"",
            imageUrl:"https://source.unsplash.com/600x300/?netflix"
        },
        {
            id:"3",
            name:"UberApp",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            date:"June 2022",
            githubLink:"",
            previewLink:"",
            imageUrl:"https://source.unsplash.com/600x300/?taxi"

        },
        {
            id:"4",
            name:"SocialApp",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            date:"March 2023",
            githubLink:"",
            previewLink:"",
            imageUrl:"https://source.unsplash.com/600x300/?people"
        },
        {
            id:"5",
            name:"SoppingApp",
            description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            date:"Feb 2022",
            githubLink:"",
            previewLink:"",
            imageUrl:"https://source.unsplash.com/600x300/?shopping"
        },
    ];


    const [currentIndex, setCurrentIndex] = useState(0);


    const prevSlide =()=>{
        const isFirstSlide=currentIndex===0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex-1;
        setCurrentIndex(newIndex);
        console.log(newIndex);
    }

    const nextSlide=()=>{
        const isLastSlide = currentIndex===(slides.length-1);
        const newIndex = isLastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
        console.log(newIndex);
    }

    const goToSlide =(slideIndex)=>{
            setCurrentIndex(slideIndex);
    };


    

    const projectList = slides.map((slide,slideIndex)=> (
        <ProjectCard key={slide.id} data={slide} />   
       
    ));

    useEffect(()=>{
        console.log(projectList[0]);
    },[]);

  return (
    <div className='max-w-[1140px] shadow-md  max-h-[1400px] rounded w-full m-auto py-16 px-4  relative group'>
               
        <h2 className='font-bold text-4xl md:text-[40px] text-center'>Connect with me</h2>
        
        <div
        className={`w-full h-full rounded-2xl 
        bg-center bg-cover duration-500`}>
           {
            projectList[currentIndex]
            }
        </div>
            
        {/*Left arrow */}
        <div className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <AiOutlineArrowLeft onClick={prevSlide}  size={30}/>
        </div>
        {/*Right arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <AiOutlineArrowRight onClick={nextSlide}   size={30}/>
        </div>
    </div>
  )
}

export default Slider