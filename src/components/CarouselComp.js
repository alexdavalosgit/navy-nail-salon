import React from "react";
import Carousel from "react-bootstrap/Carousel";

function CorouselComp() {
  return (
    <Carousel className="carousel-container">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1528731708534-816fe59f90cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3 className="fs-1 fw-bold">Book Today</h3>
          <p className="fs-5">
            {" "}
            Call us at 202-544-2804 to book an appointment for your next
            manicure, pedicure, or other service!{" "}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1617581629397-a72507c3de9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="text-white fs-1 fw-bold">
            Located at the heart of Navy Yard Washington D.C.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1544816135-b44f18b3c5d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="fs-1 fw-bold">
            We offer modern nail art, colors, and styles.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CorouselComp;
