import React from "react";
import "./formtable.scss";
import { Col, Form, Row, FloatingLabel, Button } from "react-bootstrap";

const Formtable = () => {
  const formRowItem = [
    { controlId: "name", label: "Your name", type: "text", name: "name" },
    { controlId: "email", label: "Your Email", type: "email", name: "email" },
  ];

  let textareaStyle = {
    height: "210px",
  };

  const formNormalItem = [
    { controlId: "subject", label: "Subject", type: "text", name: "subject" },
    { controlId: "message", label: "Message", type: "", as: "textarea", style: textareaStyle },
  ];

  return (
    <Form>
      <Row>
        {formRowItem.map((item) => (
          <Col lg={6}>
            <FloatingLabel controlId={item.controlId} label={item.label} className="mb-3">
              <Form.Control type={item.type} name={item.name} />
            </FloatingLabel>
          </Col>
        ))}
      </Row>
      {formNormalItem.map((item) => (
        <FloatingLabel controlId={item.controlId} label={item.label} className="mb-3">
          <Form.Control as={item.as} name={item.name} style={item.style} />
        </FloatingLabel>
      ))}
      <Button>Submit</Button>
    </Form>
  );
};

export default Formtable;
