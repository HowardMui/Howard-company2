import React from "react";
import "./contact.scss";
import { Col, Container, Row, Form, FloatingLabel } from "react-bootstrap";
import PageHeading from "../partials/PageHeading";
import { BsEnvelope } from "react-icons/bs";
import { MdOutlineLocationOn, MdOutlinePhonelinkRing } from "react-icons/md";

const Contact = () => {
  const contactItem = [
    { heading: "Address", msg: "Diamond Hill, Kowloon, Hong Kong", icon: <MdOutlineLocationOn />, size: 12 },
    { heading: "Email", msg: "howardmui.2020@gmail.com", icon: <BsEnvelope />, size: 6 },
    { heading: "Phone", msg: "+852 92630122", icon: <MdOutlinePhonelinkRing />, size: 6 },
  ];

  return (
    <section className="" id="contact">
      <PageHeading />
      <Container>
        <div className="googleMap mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.3699343149115!2d114.20154325960388!3d22.33965643942737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340406dae1aa7a7d%3A0x797f9dc2ba7f4af3!2sDiamond%20Hill%20Station!5e0!3m2!1sen!2shk!4v1644750774555!5m2!1sen!2shk"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="form-part mt-5">
          <Row>
            <Col lg={6}>
              <Row className="g-5">
                {contactItem.map((item) => (
                  <Col lg={item.size}>
                    <div className="contact-box">
                      <div className={item.heading}>
                        {item.icon}
                        <h4>{item.heading}</h4>
                        <p>{item.msg}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>

            <Col lg={6}>
              <Form>
                <Row>
                  <Col lg={6}>
                    <FloatingLabel controlId="name" label="Your name" className="mb-3">
                      <Form.Control type="text" name="name" />
                    </FloatingLabel>
                  </Col>
                  <Col lg={6}>
                    <FloatingLabel controlId="email" label="Your Email" className="mb-3">
                      <Form.Control type="text" name="email" />
                    </FloatingLabel>
                  </Col>
                </Row>
                <FloatingLabel controlId="subject" label="Subject" className="mb-3">
                  <Form.Control type="text" />
                </FloatingLabel>
                <FloatingLabel controlId="message" label="Message" className="mb-3">
                  <Form.Control as="textarea" placeholder="Message" style={{ height: "100px" }} />
                </FloatingLabel>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
