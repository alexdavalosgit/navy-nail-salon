import React from 'react'
import { Container, Button } from 'react-bootstrap'

function Information2() {
  return (
    <Container fluid className='py-4'>
        <div className="p-3 d-flex flex-column flex-md-row p-md-3 justify-content-center">
            <div className='image-container py-2 pb-sm-0 '>
                <img 
                    src="https://images.unsplash.com/photo-1610992015762-45dca7fa3a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=964&q=80" 
                    alt="nail art"
                />
            </div>
            <div className='text-center px-sm-5'>
                <h1 className='pb-sm-3 pt-md-0 pt-3 fw-bold'>What We Offer</h1>
                <h2 className='pb-sm-3'>Skin Health. Nail Love.</h2>
                <p className='pb-sm-5 fs-5'>Our team work with clients on a very personal level to achieve their ideas about a positive image.</p>
                <Button className="btn-lg" variant='dark'>Explore Our Services</Button>
            </div>
        </div>
    </Container>
  )
}

export default Information2