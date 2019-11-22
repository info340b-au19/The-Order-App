import React, { Component } from 'react';
import { Card} from "reactstrap";
import "../App.css";

class ServicePage extends Component {
    render() {
        return (           
            <div id="service" className="content">
                <Card className="serviceCard">
                    <label className="service-container">Notify someone for assistance
                        <input type="checkbox" className="form-check-input" id="service-opt1"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="service-container">Add more to your current order
                        <input type="checkbox" className="form-check-input" id="service-opt2"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="service-container">Want to change the current order / problem with an order
                        <input type="checkbox" className="form-check-input" id="service-opt3"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="service-container">Other
                        <input type="checkbox" className="form-check-input" id="service-opt4"/>
                        <span className="checkmark"></span>
                    </label>
                    <button id="submit-service" className="desktop mt-3">Submit</button>
                    <div id="service-message" className="alert alert-danger hidden"><strong>STOP!</strong> Wait a little to add more requests</div>
                </Card>
                <div id="service-output" className="card serviceCard">
                    <div className="row">
                        <div id="service-description" className="col-lg">
                        </div>
                        <div id="service-time" className="col-lg">
                        </div>
                        <div className="col-lg">
                            <div className="service-style">Wait-time (mins:secs)</div>
                            <div id="service-timeleft" className="service-style" value="0">0</div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default ServicePage;