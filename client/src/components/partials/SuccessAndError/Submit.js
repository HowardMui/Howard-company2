import React from "react";
import PageHeading from "../PageHeading/PageHeading";
import SuccessAndError from "./SuccessAndError";
// import "./submit.scss";

const Submit = ({ submit }) => {
  return (
    <section className="" id="submit">
      <PageHeading />
      {submit ? (
        <SuccessAndError text="Thank you for your submission!!" location="/" btn="Go to Home" />
      ) : (
        <SuccessAndError text="Opps!! You got an error!! Please call the owner to fix this!!" location="/contact" btn="Contact Us" />
      )}
    </section>
  );
};

export default Submit;
