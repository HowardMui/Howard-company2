import React from "react";
import { Col, Container, Fade, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeading from "../partials/PageHeading/PageHeading";
import "./about.scss";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import imgMeeting from "../../asset/images/meeting.jpg";
import GridCol from "../partials/Gird/GridCol";

const About = () => {
  const firstPartItem = [
    { message: "Lorem ipsum dolor sit amet consectetur adipisicing elit" },
    { message: "Lorem ipsum dolor sit amet consectetur adipisicing elit" },
    { message: "Lorem ipsum dolor sit amet consectetur adipisicing elit" },
  ];

  const secondPartItem = [
    { number: "01", title: "INTERIOR DESIGN", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, cumque." },
    { number: "02", title: "COST EFFECTIVE", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, cumque." },
    { number: "03", title: "TIME EFFECTIVE", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, cumque." },
  ];

  return (
    <section className="aboutSection" id="aboutSection">
      <PageHeading />
      <Container>
        <div className="firstPart py-5 ">
          <Row className="content g-5">
            <Col lg="6" className="left-col">
              <Image fluid alt="about-pic" src={imgMeeting}></Image>
            </Col>
            <Col lg="6" className=" right-col">
              <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusamus ea blanditiis dolorum facilis natus cupiditate velit eveniet aliquam perspiciatis?</p>
              <ul className="list-unstyled">
                {firstPartItem.map((item) => (
                  <li>
                    <IoCheckmarkCircleOutline />
                    <p className="d-inline">{item.message}</p>
                  </li>
                ))}
              </ul>
              <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ad.</p>
            </Col>
          </Row>
        </div>

        <div className="secondPart pb-5 mb-5">
          <div className="py-5 heading">
            <h2>Why choose us?</h2>
          </div>

          <Row className="g-5">
            {secondPartItem.map((item) => (
              <GridCol size={4}>
                <span>{item.number}</span>
                <h4>{item.title}</h4>
                <p>{item.message}</p>
              </GridCol>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;
