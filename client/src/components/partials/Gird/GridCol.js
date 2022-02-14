import React from "react";
import { Col } from "react-bootstrap";
import "./gridcol.scss";

const GridCol = (props) => {
  return (
    <Col lg={props.size} xl={props.size2} className="gridCol-div">
      <div className="grid-box">{props.children}</div>
    </Col>
  );
};

export default GridCol;
