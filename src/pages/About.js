import React from "react";
import { Container } from "react-bootstrap";
import ImageBanner from "../components/ImageBanner";

function About() {
  return (
    <div>
      <Container fluid className="app p-0">
        <ImageBanner header="About Us" />
      </Container>
    </div>
  );
}

export default About;
