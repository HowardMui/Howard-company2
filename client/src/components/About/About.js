import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageHeading from "../partials/PageHeading";
import "./about.scss";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const About = () => {
  return (
    <section className="aboutSection" id="aboutSection">
      <PageHeading />
      <Container>
        <Row className="py-5 content">
          <Col lg="6" className="left-col">
            <h2>Lorem ipsum dolor sit amet consectetur</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, amet.</h3>
          </Col>
          <Col lg="6" className=" right-col">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus accusamus ea blanditiis dolorum facilis natus cupiditate velit eveniet aliquam perspiciatis?</p>
            <ul className="list-unstyled">
              <li>
                <IoCheckmarkCircleOutline />
                <p className="d-inline">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </li>
              <li>
                <IoCheckmarkCircleOutline />
                <p className="d-inline">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </li>
              <li>
                <IoCheckmarkCircleOutline />
                <p className="d-inline">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
              </li>
            </ul>
            <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ad.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
