import React, { useState } from "react";
import "./formtable.scss";
import { Col, Form, Row, FloatingLabel, Button } from "react-bootstrap";
import { createPost } from "../../../actions/post.js";
import { useHistory } from "react-router-dom";

const Formtable = ({ loading, setLoading }) => {
  const [validated, setValidated] = useState(false);
  const [postData, setPostData] = useState({ name: "", email: "", title: "", message: "" });
  const history = useHistory();

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
    const form = e.currentTarget;
    setValidated(true);
    // if (form.checkValidity() === false) {
    //   e.preventDefault();
    //   e.stopPropagation();
    //   console.log("All correct");
    // }
    // // else {

    // if (postData.name.trim() === "" || postData.email.trim() === "" || postData.title.trim() === "" || postData.message.trim() === "") {
    if (postData.name === "invalid") {
      console.log("Missing sth");
    } else {
      console.log("All correct");
    }

    // e.preventDefault();
    // createPost(postData, history, setLoading);
    // }
  };

  return (
    <Form validated={validated}>
      <Row>
        {/* {formRowItem.map((item) => ( */}
        <Col lg={6}>
          <FloatingLabel controlId="name" label="Your name" className="mb-3">
            <Form.Control type="text" name="name" required value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} />
            <Form.Control.Feedback type="invalid">Please provide a valid name.</Form.Control.Feedback>
          </FloatingLabel>
        </Col>
        <Col lg={6}>
          <FloatingLabel controlId="email" label="Your Email" className="mb-3">
            <Form.Control type="email" name="email" required value={postData.email} onChange={(e) => setPostData({ ...postData, email: e.target.value })} />
            <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
          </FloatingLabel>
        </Col>
        {/* ))} */}
      </Row>
      {/* {formNormalItem.map((item) => ( */}
      <FloatingLabel controlId="subject" label="Subject" className="mb-3">
        <Form.Control type="text" name="subject" required value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <Form.Control.Feedback type="invalid">Please provide a title.</Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId="message" label="Message" className="mb-3">
        <Form.Control as="textarea" name="message" style={textareaStyle} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
      </FloatingLabel>
      {/* ))} */}
      <div className="text-center">
        <Button onClick={submitHandler}>Submit</Button>
      </div>
    </Form>
  );
};

export default Formtable;
