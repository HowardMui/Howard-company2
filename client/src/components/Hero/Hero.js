import React from "react";
import "./hero.scss";
import { Carousel } from "react-bootstrap";
import Carousel1 from "../../asset/images/Carousel1.jpg";
import Carousel2 from "../../asset/images/Carousel2.jpg";
import Carousel3 from "../../asset/images/Carousel3.jpg";

const Hero = () => {
  return (
    <Carousel fade id="hero" className="vw-100 vh-100">
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={Carousel1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={Carousel2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={Carousel3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
