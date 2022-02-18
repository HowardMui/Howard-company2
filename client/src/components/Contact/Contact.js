import React, { useState } from "react";
import "./contact.scss";
import { Col, Container, Row, Form, FloatingLabel, Spinner } from "react-bootstrap";
import PageHeading from "../partials/PageHeading/PageHeading";
import { BsEnvelope } from "react-icons/bs";
import { MdOutlineLocationOn, MdOutlinePhonelinkRing } from "react-icons/md";
import GridCol from "../partials/Gird/GridCol";
import Formtable from "../partials/Form/Formtable";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const contactItem = [
    { heading: "Address", msg: "Diamond Hill, Kowloon, Hong Kong", icon: <MdOutlineLocationOn />, size: 12 },
    { heading: "Email", msg: "howardmui.2020@gmail.com", icon: <BsEnvelope />, size: 6 },
    { heading: "Phone", msg: "+852 92630122", icon: <MdOutlinePhonelinkRing />, size: 6 },
  ];

  const formItem = [
    { controlId: "subject", label: "Subject", type: "text", name: "subject" },
    { controlId: "message", label: "Message", type: "", as: "textarea", style: "100px" },
  ];

  return (
    <section className="" id="contact">
      <PageHeading />
      <Container>
        <div className="googleMap my-5">
          <iframe
            className="mb-5"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.3699343149115!2d114.20154325960388!3d22.33965643942737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340406dae1aa7a7d%3A0x797f9dc2ba7f4af3!2sDiamond%20Hill%20Station!5e0!3m2!1sen!2shk!4v1644750774555!5m2!1sen!2shk"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="info-part mb-5">
          <Row className="gy-5">
            <Col lg={6} className="my-5">
              <Row className="g-4 text-center ">
                {contactItem.map((item) => (
                  <GridCol size={item.size}>
                    <div className={item.heading}>
                      {item.icon}
                      <h4 className="mb-3">{item.heading}</h4>
                      <p>{item.msg}</p>
                    </div>
                  </GridCol>
                ))}
              </Row>
            </Col>

            <GridCol size={6} className="my-5">
              <Formtable loading={loading} setLoading={setLoading} errorMsg={errorMsg} setErrorMsg={setErrorMsg} />
            </GridCol>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Contact;

// loading ? (
//   <div id="spinner-page">
//     <Spinner className="p-5" animation="border" style={{ height: "50px" }} />
//   </div>
// ) :
