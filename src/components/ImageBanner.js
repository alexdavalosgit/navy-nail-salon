import React from "react";
import { Container, Figure } from "react-bootstrap";

function ImageBanner(props) {
  return (
    <div className="image-banner border">
      <h1 className="fw-bold text-center">{props.header}</h1>
      <img
        alt="nail polish banner"
        src="https://images.unsplash.com/photo-1598104358204-87cefc7c5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2109&q=80"
      />
    </div>
  );
}

export default ImageBanner;
