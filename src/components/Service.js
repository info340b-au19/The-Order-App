import React, { Component } from 'react';
import { Card } from "reactstrap";
import "../App.css";

class ServicePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            serviceCount: 0,
            time: 0,
            help: false
        }
    }

    submit() {
        this.setState({
            time: this.state.time + 3,
            help: true
        })
    }

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
                    <label className="service-container">Notify someone for assistance
                        <input type="checkbox" className="form-check-input" id="service-opt1" />
                        <span className="checkmark"></span>
                    </label>
                    <label className="service-container">Add more to your current order
                        <input type="checkbox" className="form-check-input" id="service-opt2" />
                        <span className="checkmark"></span>
                    </label>
                    <label className="service-container">Want to change the current order / problem with an order
                        <input type="checkbox" className="form-check-input" id="service-opt3" />
                        <span className="checkmark"></span>
                    </label>
                    <label className="service-container">Other
                        <input type="checkbox" className="form-check-input" id="service-opt4" />
                        <span className="checkmark"></span>
                    </label>
                    <button id="submit-service" className="desktop mt-3" onClick={() => this.submit()}>Submit</button>
                    <div id="service-message" className={this.help()}><strong>SUCCESS!</strong> Wait-time for requests: {this.state.time}mins</div>
                </Card>
            </div>
        );
    }
}

export default ServicePage;