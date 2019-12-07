import React, { Component } from 'react';
import "../App.css";

class Queue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dineIn: true,
            input: 0,
            queueNumber: 9,
            deliveryNumber: 3,
            queuedIn: false,
            isDisabled: false,
            dineInWaittime: 15,
            deliveryWaittime: 5
        }
    }

    // Resets the data when going through modes
    changeCurrent() {
        this.setState({
            dineIn: !this.state.dineIn,
            queuedIn: false,
            queueNumber: 9,
            deliveryNumber: 3,
            input: 0,
            isDisabled: false,
            dineInWaittime: 15,
            deliveryWaittime: 5
        })
    }

    // Disables the input when in queue
    changeInput = (event) => {
        this.setState({
            input: event.target.value.replace(/\D/, '')
        })
    }

    // Changes the queue number when in queue
    changeQueueNumber() {
        if (!this.state.isDisabled) {
            if (this.state.dineIn && this.state.input !== 0) {
                this.setState({
                    queueNumber: 10,
                    dineInWaittime: this.state.dineInWaittime + 3,
                    isDisabled: true
                })
            } else if (!this.state.dineIn) {
                this.setState({
                    deliveryNumber: 4,
                    deliveryWaittime: this.state.deliveryWaittime + 2,
                    isDisabled: true
                })
            }
        } else {
            this.setState({
                isDisabled: false,
                queueNumber: 9,
                dineInWaittime: (this.state.dineInWaittime - 3 > 0) ? this.state.dineInWaittime - 3 : 0,
                deliveryNumber: 3,
                deliveryWaittime: (this.state.deliveryWaittime - 2 > 0) ? this.state.deliveryWaittime - 2 : 0,
            })
        }
    }

    queueButton() {
        if (this.state.isDisabled) {
            return "Dequeue";
        } else {
            return "Join the Queue"
        }
    }

    deliveryActive() {
        if (this.state.isDisabled) {
            return "delivery ml-2 deliveryActive";
        } else {
            return "delivery ml-2"
        }
    }


    // Changes the current mode
    current() {
        if (this.state.dineIn) {
            return (
                <>
                    <div id="home" className="content">
                        <div className="card queueCard">
                            <button id="homeDelivery" className="desktop" onClick={() => this.changeCurrent()}>DINE IN</button>
                            <div>
                                <span id="queueHeader" className="queueInside"># in queue for dine-in: </span>
                                <span id="queueNumber" className="queueInside">{this.state.queueNumber}</span>
                            </div>
                            <div>
                                <span className="queueInside">Wait-time of queue (mins): </span>
                                <span id="queueWait" className="queueInside">{this.state.dineInWaittime}</span>
                            </div>
                            <div className="input-group mt-3">
                                <input id="groupNumber" placeholder="# of people" value={this.state.input} onChange={this.changeInput} disabled={this.state.isDisabled} />
                                <button id="queue" className="desktop dhover ml-2" onClick={() => this.changeQueueNumber()} >{this.queueButton()}</button>
                            </div>
                            <p className="queueInfo">Number of members in your party</p>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div id="home" className="content">
                        <div className="card queueCard">
                            <button id="homeDelivery" className="delivery" onClick={() => this.changeCurrent()}>DELIVERY</button>
                            <div>
                                <span id="queueHeader" className="queueInside"># in queue for delivery: </span>
                                <span id="queueNumber" className="queueInside">{this.state.deliveryNumber}</span>
                            </div>
                            <div>
                                <span className="queueInside">Wait-time of queue (mins): </span>
                                <span id="queueWait" className="queueInside">{this.state.deliveryWaittime}</span>
                            </div>
                            <div className="input-group mt-3">
                                <button id="queue" className={this.deliveryActive()} onClick={() => this.changeQueueNumber()}>{this.queueButton()}</button>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    }

    render() {
        return (
            <div>
                {this.current()}
            </div>
        );
    }
}

export default Queue;