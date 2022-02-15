import React from "react";
import "./hero.scss";
import { Carousel, Container } from "react-bootstrap";
import Carousel1 from "../../asset/images/Carousel1.jpg";
import Carousel2 from "../../asset/images/Carousel2.jpg";
import Carousel3 from "../../asset/images/Carousel3.jpg";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const nextBtn = <IoIosArrowForward></IoIosArrowForward>;
const prevBtn = <IoIosArrowBack></IoIosArrowBack>;

const Hero = () => {
  const Items = [
    { title: "Innovative ", message: "Nulla vitae elit libero", image: Carousel2 },
    { title: "Committed ", message: "Nulla vitae elit libero", image: Carousel3 },
    { title: "Cooperative", message: "Nulla vitae elit libero", image: Carousel1 },
  ];

  return (
    <section id="hero">
      <div className="carousel-part">
        <Carousel fade className="vw-100 vh-100" interval={3000} nextIcon={nextBtn} prevIcon={prevBtn}>
          {Items.map((item) => (
            <Carousel.Item>
              <img className="d-block w-100 h-100" src={item.image} alt="First slide" />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.message}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="py-5 partnership">
        <div className="trypic"></div>
      </div>
    </section>
  );
};

export default Hero;
