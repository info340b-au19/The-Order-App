import React, { Component } from 'react';
import "../App.css";
import developers from "../developers.json";
import _ from "lodash";
import { Alert,Container,Row,Col} from "reactstrap";

class AboutProfile extends Component {
    constructor(props) {
        super(props);
        let name = this.props.match.params.name;
        let index = _.findIndex(developers, { name: name });
        this.state = {
            person: developers[index]
        };
    }

    render() {
        let developer = this.state.person
        if (developer) {
            return (
                <>
                    <Container className="standardContainer">
                        <Row>
                            <Col md="6">
                        <img src={"/img/" + developer.img} alt={developer.fullName} className="devPic" />
                        </Col>
                        <Col md="6">
                        <div className="aboutInfo">
                            <p className="aboutName">{developer.fullName}</p>
                            <p>{"Age: " + developer.age}</p>
                            <p>{"Ethnicity: " + developer.ethnicity}</p>
                            <p>{"Occupation: " + developer.occupation}</p>
                            <p>{"Passion: " + developer.passion}</p>
                            <p>{"Likes: " + developer.likes}</p>
                            <p>{"Hates: " + developer.hates}</p>
                        </div>
                        </Col>
                        </Row>
                    </Container>
                </>
            );
        } else {
            return (
                <div className="standardContainer">
                    <Alert color="danger">There is no developer with that name!</Alert>
                </div>
            );
        }
    }
}

export default AboutProfile;