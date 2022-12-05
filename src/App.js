import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import Infobar from './components/Infobar'
import Navbar from './components/Navbar'
import CarouselComp from './components/CarouselComp'
import Information from './components/Information'
import SocialMedia from './components/SocialMedia'
import Footer from './components/Footer'
import Information2 from './components/Information2'
import Services from './components/Services'

function App() {
  return (
    <div>
      <Infobar/>
      <Navbar/>

      <Container fluid className='app p-0'>
        <CarouselComp/>
        <Information2/>
        <Information/>
        <Services/>
        <SocialMedia/>
      </Container>

      <Footer/>
    </div>
  )
}

export default App