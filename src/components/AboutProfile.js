import React, { Component } from 'react';
import "../App.css";
import developers from "../developers.json";
import _ from "lodash";
import { Alert } from "reactstrap";

class AboutProfile extends Component {
    constructor(props) {
        super(props);
        let name = this.props.match.params.name;
        let index = _.findIndex(developers, {name: name});
        this.state = {
            person: developers[index]
        };
    }

    render() {
        let developer = this.state.person
        if(developer) {
            return (
                <>
                <div className="standardContainer">
                    <img src={"/img/eric.jpg"} alt={developer.fullName} className="devPic" />
                    
                </div>
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