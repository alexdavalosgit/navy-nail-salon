import React from "react";
import { Container, Button } from "react-bootstrap";
import img1 from "../assets/images/img1.avif";

function Information2() {
  return (
    <Container fluid className="py-4 info-container">
      <div className="p-sm-5 d-flex flex-column flex-md-row p-md-3 justify-content-center">
        <div className="text-center px-sm-5 py-3 bg-cream-op">
          <h1 className="pb-sm-3 pt-md-0 pt-3 fw-bold">What We Offer</h1>
          <h2 className="pb-sm-3 secondary-color fw-bold">
            Skin Health. Nail Love.
          </h2>
          <p className="pb-sm-5 fs-5">
            Our team works with clients on a very personal level to achieve
            their ideas about a positive image.
          </p>
          <Button href="/about" className="btn-lg" variant="outline-dark">
            Learn More
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Information2;
