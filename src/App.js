import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import Infobar from './components/Infobar'
import Navbar from './components/Navbar'
import CarouselComp from './components/CarouselComp'
import Information from './components/Information'
import TeamInformation from './components/TeamInformation'

function App() {
  return (
    <div>
      <Infobar/>
      <Navbar/>
      <Container fluid className='app p-0'>
        <CarouselComp/>
        <Information/>
        <TeamInformation/>
      </Container>
    </div>
  )
}

export default App