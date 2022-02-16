import React from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";
import PageHeading from "../partials/PageHeading";
import "./submit.scss";

const Submit = () => {
  const history = useHistory();

  return (
    <section className="" id="submit">
      <PageHeading />
      <Container>
        <div className="p-5 div-container" style={{ height: "75vh" }}>
          <h1 className="mb-5">Thank you for your submission!!</h1>
          <Button
            onClick={() => {
              history.push("/");
            }}
          >
            Go to Home
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Submit;
