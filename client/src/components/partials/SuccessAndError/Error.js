import React from "react";
import { Container } from "react-bootstrap";
import PageHeading from "../PageHeading/PageHeading";
import SuccessAndError from "./SuccessAndError";

const Error = () => {
  return (
    <section className="" id="error">
      <PageHeading />
      <SuccessAndError text="Opps!! You got an error!! Please call the owner to fix this!!" location="/contact" btn="Contact Us" />
    </section>
  );
};

export default Error;
