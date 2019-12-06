import React, { Component } from 'react';
import "../App.css";

class ServiceOptions extends Component {
    render() {
        return (
            <label className="service-container">{this.props.option}
            <input type="checkbox" className="form-check-input" id="service-opt1" />
                <span className="checkmark"></span>
            </label>
        );
    }
}

export default ServiceOptions;