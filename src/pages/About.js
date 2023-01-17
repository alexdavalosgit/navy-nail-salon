import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="bg-cream">
      <Container fluid className="app p-0">
        <div className="p-sm-5 p-3 border about-hero">
          <h1 className="text-white fw-bold text-center">About Us</h1>
          <div className="border bg-cream text-center p-3">
            <h3>Navy Yard, Washington D.C</h3>
            <p>
              Navy Nails & Spa is a premier Nails and Waxing lounge in Navy
              Yard, Washington D.C.
            </p>
            <h3>Located at</h3>
            <p>1116 8th Street SE, Washington DC 20003</p>
            <p>For more information call 202-544-2804.</p>
          </div>
        </div>
        <div className="px-sm-5 px-3 pt-5 pb-md-3 text-center">
          <div className="secondary-background p-5 m-2">
            <h3 className="text-white fw-bold">The Navy Nails Experience</h3>
            <p>Welcome to Navy Nails & Spa.</p>
            <p>
              Our mission is simple – to provide a Nails and Waxing lounge in a
              serene and relaxing environment. We offer a variety of pedicure
              services such as our Lavender & Chamomile, Winter Warm, Ocean
              Refresh, and Vitamin Recharge pedicures.
            </p>
          </div>
        </div>
        <div className="d-md-flex px-sm-5 px-3 pb-5 text-center">
          <div className="secondary-background p-4 m-2">
            <h3 className="text-white fw-bold">Walk Ins Welcome</h3>
            <p>
              We want to be there for you! We know your week can be busy so feel
              free to come in, as we offer flexible schedules to accommodate
              you. If you have a specific time in mind, appointments can be made
              by calling us at 202-544-2804!
            </p>
          </div>
          <div className="secondary-background p-4 m-2">
            <h3 className="text-white fw-bold">Our Mission</h3>
            <p>
              Navy Nails & Spa prides ourselves with top of the line manicures
              and pedicures from experienced professionals. Following safe and
              clean regulations, we keep you relaxed, refreshed, and 100%
              satisfied with our service.
            </p>
          </div>
        </div>
        <div className="map-responsive mt-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12424.221356185493!2d-77.0112724921875!3d38.87697570000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b9cc3e18005d%3A0x1262bf55320f65ca!2sNavy%20Nails%20And%20Spa%20Washington!5e0!3m2!1sen!2sus!4v1673977957317!5m2!1sen!2sus"
            title="googlemaps"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default About;
