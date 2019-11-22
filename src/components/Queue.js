import React, { Component } from 'react';
import "../App.css";
import { NavLink } from 'react-router-dom';

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

    changeCurrent = () => {
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

    changeInput = (event) => {
        this.setState({
            input: event.target.value.replace(/\D/, '')
        })
    }

    changeQueueNumber = () => {
        if (!this.state.isDisabled) {
            if (this.state.dineIn && this.state.input !== 0) {
                this.setState({
                    queueNumber: 10,
                    dineInWaittime: this.state.dineInWaittime + 3,
                    isDisabled: true
                })
            } else if (!this.state.dineIn && this.state.input !== 0) {
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

    current = () => {
        if (this.state.dineIn) {
            return (
                <>
                    <div id="home" className="content">
                        <div className="card queueCard">
                            <button id="homeDelivery" className="desktop" onClick={() => this.changeCurrent()}>DINE IN</button>
                            <div>
                                <span id="queueHeader" className="queueInside">Groups in queue: </span>
                                <span id="queueNumber" className="queueInside">{this.state.queueNumber}</span>
                            </div>
                            <div>
                                <span className="queueInside">Wait-time (mins): </span>
                                <span id="queueWait" className="queueInside">{this.state.dineInWaittime}</span>
                            </div>
                            <div className="input-group mt-3">
                                <input id="groupNumber" placeholder="# of people" value={this.state.input} onChange={this.changeInput} disabled={this.state.isDisabled} />
                                <button id="queue" className="desktop dhover ml-2" onClick={() => this.changeQueueNumber()} >Queue Up</button>
                            </div>
                            <NavLink exact to="/menu" style={{ textDecoration: 'none' }} ><button id="homeMenu" className="desktop dhover mt-3" onClick={() => this.props.changeCurrent(2)} >MENU</button></NavLink>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div id="home" className="content">
                        <div className="card queueCard">
                            <button id="homeDelivery" className="delivery" onClick={() => this.changeCurrent()}>DINE IN</button>
                            <div>
                                <span id="queueHeader" className="queueInside">Groups in queue: </span>
                                <span id="queueNumber" className="queueInside">{this.state.deliveryNumber}</span>
                            </div>
                            <div>
                                <span className="queueInside">Wait-time (mins): </span>
                                <span id="queueWait" className="queueInside">{this.state.deliveryWaittime}</span>
                            </div>
                            <div className="input-group mt-3">
                                <input id="groupNumber" placeholder="# of people" value={this.state.input} onChange={this.changeInput} disabled={this.state.isDisabled} />
                                <button id="queue" className="delivery ml-2" onClick={() => this.changeQueueNumber()} >Queue Up</button>
                            </div>
                            <NavLink exact to="/menu" style={{ textDecoration: 'none' }} ><button id="homeMenu" className="delivery mt-3" onClick={() => this.props.changeCurrent(2)} >MENU</button></NavLink>
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