import React from "react";
import { Container, Image, Button } from "react-bootstrap";
import Footer from "../components/Footer";
import ServiceList from "../components/ServiceList";
import serviceImg from "../assets/images/services.jpg";

function Services() {
  return (
    <div className="secondary-background">
      <Container className="app py-4">
        <ServiceList />
        <div className="bg-cream text-black p-4 mt-5 text-center">
          <h1 className="fs-4 p-2">Variety of Services</h1>
          <p className="px-3">
            From natural manicures to deluxe pedicures, we guarantee you will
            find something you love! We offer regular manicures, gel manicures,
            as well as full sets. One of our most popular choices is our spa
            pedicure with hot stones! Give us a call at 202-544-2804 and we'd be
            happy to answer any questions!
          </p>
        </div>
        <Image
          src={serviceImg}
          alt="pedicure img"
          className="py-4 services-img"
        />
        <div className="bg-cream text-black p-4 mb-5 text-center">
          <h1 className="fs-4 p-2">Book an appointment today</h1>
          <p className="px-3">
            For appointments and availability, please call 202-544-2804 for more
            information. We ask that you give us 24 hours notice if you need to
            cancel your appointment.
          </p>
          <p className="px-3">We thank you for time and consideration.</p>
          <Button variant="outline-dark" href="/about">
            Learn More
          </Button>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Services;
