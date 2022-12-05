import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'

function Services() {
  return (
    <Container fluid className=''>

        <Row>
            <Col className='border text-center p-5'>
                <h3>Manicure</h3>
                <p>Our nail care treatment stimulate nail growth and soften dry, dull skin.</p>
                <Button variant='dark'>Learn More</Button>
            </Col>
            <Col className='border text-center p-5'>
                <h3>Pedicure</h3>
                <p>Pedicure services provide full restoration for your nails with extra polishing.</p>
                <Button variant='dark'>Learn More</Button>
            </Col>
        </Row>

        <Row>
            <Col className='border text-center p-5'>
                <h3>Nail Art</h3>
                <p>Our nail care treatment stimulate nail growth and soften dry, dull skin.</p>
                <Button variant='dark'>Learn More</Button>
            </Col>
            <Col className='border text-center p-5'>
                <h3>Parrafin Wax</h3>
                <p>Our nail care treatment stimulate nail growth and soften dry, dull skin.</p>
                <Button variant='dark'>Learn More</Button>
            </Col>
        </Row>

    </Container>
  )
}

export default Services