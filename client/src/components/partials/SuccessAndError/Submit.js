import React from "react";
import PageHeading from "../PageHeading/PageHeading";
import SuccessAndError from "./SuccessAndError";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const Submit = ({ submit }) => {
  return (
    <section className="" id="submit">
      <PageHeading />
      {submit ? (
        <SuccessAndError text="Thank you for your submission!!" location="/" btn="Go to Home">
          <TiTick className="mb-5 icon-check" />
        </SuccessAndError>
      ) : (
        <SuccessAndError text="Opps!! You got an error!! Please call the owner to fix this!!" location="/contact" btn="Contact Us">
          <ImCross className="mb-5 icon-cross" />
        </SuccessAndError>
      )}
    </section>
  );
};

export default Submit;
