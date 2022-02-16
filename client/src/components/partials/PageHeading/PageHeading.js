import React from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./pageheading.scss";

const PageHeading = () => {
  let location = useLocation();

  return (
    <div className="section-heading" id="section-heading">
      <Container>
        <div className="section-div">
          <h3 className="text-capitalize">{location.pathname.substr(1)}</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="text-capitalize">{location.pathname.substr(1)}</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default PageHeading;
