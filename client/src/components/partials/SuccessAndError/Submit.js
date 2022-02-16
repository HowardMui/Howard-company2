import React from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "../../Header/Header";
import PageHeading from "../PageHeading/PageHeading";
import SuccessAndError from "./SuccessAndError";
// import "./submit.scss";

const Submit = () => {
  const history = useHistory();

  return (
    <section className="" id="submit">
      <PageHeading />
      <SuccessAndError text="Thank you for your submission!!" location="/" btn="Go to Home" />
    </section>
  );
};

export default Submit;
