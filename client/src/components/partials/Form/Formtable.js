import React, { useState } from "react";
import "./formtable.scss";
import { Col, Form, Row, FloatingLabel, Button, Alert, Spinner } from "react-bootstrap";
import { createPost } from "../../../actions/post.js";
import { useHistory } from "react-router-dom";

const Formtable = ({ setSubmit, errorMsg, setErrorMsg, loading, setLoading }) => {
  const [validated, setValidated] = useState(false);

  const [postData, setPostData] = useState({ name: "", email: "", title: "", message: "" });
  const history = useHistory();
  // const setErrorMessage = setErrorMsg();

  // const formRowItem = [
  //   { controlId: "name", label: "Your name", type: "text", name: "name" },
  //   { controlId: "email", label: "Your Email", type: "email", name: "email" },
  // ];

  let textareaStyle = {
    height: "210px",
  };

  // const formNormalItem = [
  //   { controlId: "subject", label: "Subject", type: "text", name: "subject" },
  //   { controlId: "message", label: "Message", type: "", as: "textarea", style: textareaStyle },
  // ];

  // console.log(validated);

  const submitHandler = (e) => {
    createPost(postData, history, setLoading, setErrorMsg, setSubmit);
  };

  return (
    <Form validated={validated}>
      {errorMsg && (
        <Alert variant="danger" className="error-alert">
          {errorMsg}
        </Alert>
      )}
      <Row>
        <Col lg={6}>
          <FloatingLabel controlId="name" label="Your name" className="mb-3">
            <Form.Control type="text" name="name" required value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} />
          </FloatingLabel>
        </Col>
        <Col lg={6}>
          <FloatingLabel controlId="email" label="Your Email" className="mb-3">
            <Form.Control type="email" name="email" required value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })} />
          </FloatingLabel>
        </Col>
      </Row>

      <FloatingLabel controlId="subject" label="Subject" className="mb-3">
        <Form.Control type="text" name="subject" required value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
      </FloatingLabel>
      <FloatingLabel controlId="message" label="Message" className="mb-3">
        <Form.Control as="textarea" name="message" style={textareaStyle} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
      </FloatingLabel>

      <div className="text-center">
        {loading ? (
          <Button className="loadingBtn">
            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
            {/* &nbsp; Loading... */}
          </Button>
        ) : (
          <Button onClick={submitHandler}>Submit</Button>
        )}
      </div>
    </Form>
  );
};

export default Formtable;
