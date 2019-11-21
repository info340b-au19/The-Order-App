import React, { Component } from 'react';
import { Card, Row, Col } from "reactstrap";
import ReviewStar from "./ReviewStar";
import "../App.css";
import { Redirect} from 'react-router-dom';
import dishes from "../menu.json";

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {redirect:false};
      }
    
      handleClick = () => {
        this.setState({redirect: true}); 
      }

    render() {
        if(this.state.redirect) { //if we should redirect
            return <Redirect push to='/restaurant'/>;
          }
        return (
            <div id="restaurants" className="container">
                <div className="flexcontainer">
                    <h2>Restaurants around your Location</h2>
                    <Row>
                        <Col sm="12" lg="6">
                            <Card id="mcd" className="homeCard" onClick={this.handleClick}>
                                <img src="img/mcdHome.jpeg" alt="restaurant" className="homeImg imgFluid" />
                                <div className="homeInfo">
                                    <h3>McDonalds</h3>
                                    <p className="extraInfo">Delivery: Available</p>
                                    <p className="extraInfo">Wait-time: 5-10 mins</p>
                                    <ReviewStar number={4} />
                                </div>
                            </Card>
                        </Col>
                        <Col sm="12" lg="6">
                            <Card className="homeCard closedOverlay">
                                <img src="img/bokabokHome.jpg" alt="restaurant" className="homeImg imgFluid" />
                                <div className="homeInfo">
                                    <h3>Bok a Bok Chicken</h3>
                                    <p className="extraInfo">Delivery: Unavailable</p>
                                    <p className="extraInfo">Wait-time: 17-24 mins</p>
                                    <ReviewStar number={3} />
                                </div>
                                <div className="closed">
                                    <div className="closedText">UNAVAILABLE</div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <a href="#" className="expand">expand</a>
                    <hr className="spaceBreak" />
                </div>

                <div className="flexcontainer">
                    <h2>New Restaurants to Try</h2>
                    <Row>
                        <Col sm="12" lg="6">
                            <Card className="homeCard closedOverlay">
                                <img src="img/thaigerroomHome.jpg" alt="restaurant" className="homeImg imgFluid" />
                                <div className="homeInfo">
                                    <h3>Thaiger Room</h3>
                                    <p className="extraInfo">Delivery: Unavailable</p>
                                    <p className="extraInfo">Wait-time: 5-10 mins</p>
                                    <ReviewStar number={2} />
                                </div>
                                <div className="closed">
                                    <div className="closedText">UNAVAILABLE</div>
                                </div>
                            </Card>
                        </Col>
                        <Col sm="12" lg="6">
                            <Card className="homeCard closedOverlay">
                                <img src="img/dennyHome.jpg" alt="restaurant" className="homeImg imgFluid" />
                                <div className="homeInfo">
                                    <h3>Denny</h3>
                                    <p className="extraInfo">Delivery: Available</p>
                                    <p className="extraInfo">Wait-time: 35-52 mins</p>
                                    <ReviewStar number={3} />
                                </div>
                                <div className="closed">
                                    <div className="closedText">UNAVAILABLE</div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <a href="#" className="expand">expand</a>
                    <hr className="spaceBreak" />
                </div>

                <div className="flexcontainer">
                    <h2>Go Back to the Classics</h2>
                    <Row>
                        <Col sm="12" lg="6">
                            <Card className="homeCard closedOverlay">
                                <img src="img/meesumHome.jpg" alt="restaurant" className="homeImg imgFluid" />
                                <div className="homeInfo">
                                    <h3>Mee Sum</h3>
                                    <p className="extraInfo">Delivery: Unavailable</p>
                                    <p className="extraInfo">Wait-time: 8-12 mins</p>
                                    <ReviewStar number={1} />
                                </div>
                                <div className="closed">
                                    <div className="closedText">UNAVAILABLE</div>
                                </div>
                            </Card>
                        </Col>
                        <Col sm="12" lg="6">
                            <Card className="homeCard closedOverlay">
                                <img src="img/starbucksHome.jpg" alt="restaurant" className="homeImg imgFluid" />
                                <div className="homeInfo">
                                    <h3>Starbucks</h3>
                                    <p className="extraInfo">Delivery: Unavailable</p>
                                    <p className="extraInfo">Wait-time: 15 mins</p>
                                    <ReviewStar number={5} />
                                </div>
                                <div className="closed">
                                    <div className="closedText">UNAVAILABLE</div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                    <a href="#" className="expand">expand</a>
                    <hr className="spaceBreak" />
                </div>
            </div>
        );
    }
}

export default HomePage;
