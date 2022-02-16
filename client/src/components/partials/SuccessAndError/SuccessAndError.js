import React from "react";
import "./successanderror.scss";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const SuccessAndError = (props) => {
  const history = useHistory();

  return (
    <Container>
      <div className="p-5 div-container" style={{ height: "75vh" }}>
        <h1 className="mb-5">{props.text}</h1>
        <Button
          onClick={() => {
            history.push(props.location);
          }}
        >
          {props.btn}
        </Button>
      </div>
    </Container>
  );
};

export default SuccessAndError;
