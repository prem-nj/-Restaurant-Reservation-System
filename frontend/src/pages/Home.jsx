import React from 'react'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import WhoAreWe from '../components/WhoAreWe'
import Team from '../components/Team'
import Footer from '../components/Footer'
import Reservation from '../components/Reservation'

const Home = () => {
  return (
      <> 
         <Navbar/>
         <HeroSection/>
         <About/>
         <Qualities/>
         <Menu/>
         <WhoAreWe/>
         <Team/>
         <Reservation/>
         <Footer/>
    </>
  )
}

export default Home
