import React, { Component } from 'react';
import "../App.css";
import { Card, CardTitle, CardText, CardBody, Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

class About extends Component {
    render() {
        return (
                <Container className="standardContainer">
                    <p className="aboutTitle">About Us</p>
                    <p className="developer">Developers</p>
                    <Row>
                        <Col sm="12" md="6" lg="4">
                            <Link to="/about/Eric" id="styleLink1" >
                                <Card>
                                    <CardBody className="aboutCard">
                                        <CardTitle><strong>Eric Ng</strong></CardTitle>
                                        <CardText>Main Developer</CardText>
                                    </CardBody>
                                </Card>
                            </Link>
                        </Col>
                        <Col sm="12" md="6" lg="4">
                            <Link to="/about/Mingyi" id="styleLink2" >
                                <Card>
                                    <CardBody className="aboutCard">
                                        <CardTitle><strong>Mingyi Yang</strong></CardTitle>
                                        <CardText>Main Developer</CardText>
                                    </CardBody>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </Container>
        );
    }
}

export default About;