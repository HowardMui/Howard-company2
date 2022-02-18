import React from "react";
import { Container, Row, Col, TabContainer, Nav, TabContent, Tab, Sonnet } from "react-bootstrap";
import PageHeading from "../partials/PageHeading/PageHeading";
import "./services.scss";
import { FaHandHoldingUsd, FaUserTie, FaPencilRuler } from "react-icons/fa";
import { MdOutlineSquareFoot } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { IoIosConstruct } from "react-icons/io";
import { SiKasasmart } from "react-icons/si";
import GridCol from "../partials/Gird/GridCol";

const Service = () => {
  const servicesItems = [
    { icon: <MdOutlineSquareFoot />, heading: "Free on-site measurement and quotation", msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, harum" },
    { icon: <FaUserTie />, heading: "Professional help-seeking inquiry", msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, harum" },
    { icon: <RiTeamFill />, heading: "Professional design team", msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, harum" },
    { icon: <IoIosConstruct />, heading: "construction work", msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, harum" },
    { icon: <SiKasasmart />, heading: "smart home solutions", msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, harum" },
    { icon: <FaPencilRuler />, heading: "space planning", msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, harum" },
  ];

  return (
    <section id="services">
      <PageHeading />
      <Container>
        <div className="services-part1 py-5">
          <Row className="g-5">
            {servicesItems.map((item) => (
              <GridCol size={6} size2={4}>
                {item.icon}
                <h4 className="text-capitalize mb-4">{item.heading}</h4>
                <p>{item.msg}</p>
              </GridCol>
            ))}
          </Row>
        </div>

        {/* <div className="services-part2 py-5">
          <div className="heading">
            <h2>Feature</h2>
            <p>Check our features</p>
          </div>
          <div className="">
            <TabContainer>
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, reiciendis.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, reiciendis.123</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </TabContainer>
          </div>
        </div> */}
      </Container>
    </section>
  );
};

export default Service;
