import React from "react";
import { Container } from "react-bootstrap";
import CarouselComp from "../components/CarouselComp";
import Information from "../components/Information";
import SocialMedia from "../components/SocialMedia";
import Footer from "../components/Footer";
import Information2 from "../components/Information2";
import ServicesComp from "../components/ServicesComp";

function Home() {
  return (
    <div>
      <Container fluid className="app p-0">
        <CarouselComp />
        <Information2 />
        <Information />
        <ServicesComp />
        <SocialMedia />
      </Container>

      <Footer />
    </div>
  );
}

export default Home;
