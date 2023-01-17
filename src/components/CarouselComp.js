import React from "react";
import Carousel from "react-bootstrap/Carousel";
import carouselImg1 from "../assets/images/carousel-img1.avif";
import carouselImg2 from "../assets/images/carousel-img2.avif";
import carouselImg3 from "../assets/images/carousel-img3.avif";

function CorouselComp() {
  return (
    <Carousel className="carousel-container">
      <Carousel.Item>
        <img className="d-block w-100" src={carouselImg1} alt="First slide" />

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
        <img className="d-block w-100" src={carouselImg2} alt="Second slide" />
        <Carousel.Caption>
          <h3 className="text-white fs-1 fw-bold">
            Located at the heart of Navy Yard Washington D.C.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={carouselImg3} alt="Third slide" />

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
