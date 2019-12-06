import React, { Component } from 'react';
import { Card } from "reactstrap";
import "../App.css";
import Options from "./ServiceOptions.js";

class ServicePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceCount: 0,
            time: 0,
            help: false
        }
    }

    // Function for the submit button
    submit() {
        this.setState({
            time: this.state.time + 3,
            help: true
        })
    }

    // Helper function that shows the alert when button is clicked
    help() {
        if (this.state.help) {
            return "alert alert-success";
        } else {
            return "alert alert-success hidden"
        }
    }

    render() {
        return (
            /* Check boxes with the help from W3 Schools */
            <div id="service" className="content">
                <Card className="serviceCard">
                    <Options option="Notify someone for assistance" />
                    <Options option="Add more to your current order" />
                    <Options option="Want to change the current order / problem with an order" />
                    <Options option="Other" />
                    <button id="submit-service" className="desktop mt-3" onClick={() => this.submit()}>Submit</button>
                    <div id="service-message" className={this.help()}><strong>SUCCESS!</strong> Wait-time for requests: {this.state.time}mins</div>
                </Card>
            </div>
        );
    }
}

export default ServicePage;