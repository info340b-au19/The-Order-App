import React, { Component } from 'react';

import "../App.css";

class QueuePage extends Component {
    render() {
        return (
            <>
                <div id="home" className="content">
                    <div className="card queueCard">
                        <button id="homeDelivery" className="desktop delivery dhover">DINE IN</button>
                        <div>
                            <span id="queueHeader" className="queueInside">Groups in queue: </span>
                            <span id="queueNumber" className="queueInside">9</span>
                        </div>
                        <div>
                            <span className="queueInside">Wait-time (mins): </span>
                            <span id="queueWait" className="queueInside">15</span>
                        </div>
                        <div className="input-group mt-3">
                            <input id="groupNumber" placeholder="# of people" />
                            <button id="queue" className="desktop dhover ml-2">Queue Up</button>
                        </div>
                        <button id="homeMenu" className="desktop dhover mt-3">MENU</button>
                    </div>
                </div>
            </>
        );
    }
}

export default QueuePage;