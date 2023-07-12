import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Slider from '../components/Slider'
import Timeline from '../components/TimelineComponent/Timeline'
import ProjectCard from '../components/ProjectCard'
import Connect from '../components/Connect'

function Home() {
  return (
    <div>
        
        <Navbar/>
        <Banner/>
        <Timeline/>
        <Slider/>
        <Connect/>
    </div>
  )
}

export default Home