import React from "react";
import { Container, Image, Button } from "react-bootstrap";

function Information() {
  return (
    <Container
      fluid
      className="h-50 px-5 d-flex justify-content-center align-items-center secondary-background"
    >
      <div className="text-center px-sm-5 py-sm-0 py-5 px-1">
        <h4 className="mb-3">Why Our Clients Choose Us</h4>
        <p className="fs-4">
          We aim to deliver the best nail design experience and customer service
          in the Washington D.C area, using all-natural products, beautiful
          polish brands and colors, and a newly renovated facility.
        </p>
      </div>
    </Container>
  );
}

export default Information;
