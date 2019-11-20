import React, { Component } from 'react';
import {Row, Col, Card} from "reactstrap";
import ReviewStar from "./ReviewStar";
import "../App.css";
import ReviewContent from "./ReviewContent";

class MenuPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewState: false,
            reviewIndex: 0
        };
    }

    toggleReview = (index) => {
        this.setState({
            reviewState: true,
            reviewIndex: index
        });
    }

    back = () => {
        this.setState({
            reviewState: false,
            reviewIndex: 0
        });
    }
    
    review = () => {
        if (this.state.reviewState) {
            return <ReviewContent index = {this.state.reviewIndex} back = {this.back} />
        }
    }

    render() {
        return (
            <>
            <div id="menu" className={ this.state.reviewState ? "content scrollLock" : "content" }>
                <div className="flexcontainer">
                    <Row>
                        <Col sm="12" lg="4">
                            <Card id="mobile-0" className="card menuCard col-lg col-mg-2 col-sm-4">
                                <img src="img/bacon qpc.jpeg" alt="burger" className="menuImg imgFluid" />
                                <ReviewStar number={3} />
                                <p className="dishName">Bacon QFC</p>
                                <p className="dishPrice">$<span>4.5</span></p>
                                <div>
                                    <button className="desktop orderBt">Order</button>
                                    <button className="desktop" onClick={() => this.toggleReview(0)} >Reviews</button>
                                </div>
                            </ Card>
                        </ Col>
                        <Col sm="12" lg="4">
                            <Card id="mobile-1" className="card menuCard col-lg col-mg-2 col-sm-4">
                                <img src="img/double bacon qpc.jpeg" alt="burger" className="menuImg imgFluid" />
                                <ReviewStar number={4} />

                                <p className="dishName">Double Bacon QPC</p>
                                <p className="dishPrice">$<span>3.5</span></p>
                                <div>
                                    <button className="desktop orderBt">Order</button>
                                    <button className="desktop" onClick={() => this.toggleReview(1)} >Reviews</button>
                                </div>
                            </ Card>
                        </Col>

                        <Col sm="12" lg="4">
                            <Card id="mobile-2" className="card menuCard col-lg col-mg-2 col-sm-4">
                                <img src="img/qpc.jpeg" alt="burger" className="menuImg imgFluid" />
                                <ReviewStar number={5} />

                                <p className="dishName">QFC</p>
                                <p className="dishPrice">$<span>5.0</span></p>
                                <div>
                                    <button className="desktop orderBt">Order</button>
                                    <button className="desktop" onClick={() => this.toggleReview(2)} >Reviews</button>
                                </div>
                            </ Card>
                        </ Col>
                    </ Row>

                    <Row>
                        <Col sm="12" lg="4">
                            <Card id="mobile-3" className="card menuCard col-lg col-mg-2 col-sm-4">
                                <img src="img/4 piece spicy.jpeg" alt="fries" className="menuImg imgFluid" />
                                <ReviewStar number={3} />

                                <p className="dishName">4 Piece Spicy BBQ Tenders</p>
                                <p className="dishPrice">$<span>5.5</span></p>
                                <div>
                                    <button className="desktop orderBt">Order</button>
                                    <button className="desktop" onClick={() => this.toggleReview(3)} >Reviews</button>
                                </div>
                            </ Card>
                        </ Col>
                        <Col sm="12" lg="4">
                            <Card id="mobile-4" className="card menuCard col-lg col-mg-2 col-sm-4">
                                <img src="img/big mac.jpeg" alt="burger" className="menuImg imgFluid" />
                                <ReviewStar number={3} />

                                <p className="dishName">Big Mac</p>
                                <p className="dishPrice">$<span>6.0</span></p>
                                <div>
                                    <button className="desktop orderBt">Order</button>
                                    <button className="desktop" onClick={() => this.toggleReview(4)} >Reviews</button>
                                </div>
                            </ Card>
                        </ Col>

                        <Col sm="12" lg="4">
                            <Card id="mobile-5" className="card menuCard col-lg col-mg-2 col-sm-4">
                                <img src="img/20mcnuggets.jpeg" alt="fries" className="menuImg imgFluid" />
                                <ReviewStar number={2} />

                                <p className="dishName">20 Piece McNuggets</p>
                                <p className="dishPrice">$<span>6.5</span></p>
                                <div>
                                    <button className="desktop orderBt">Order</button>
                                    <button className="desktop" onClick={() => this.toggleReview(5)} >Reviews</button>
                                </div>
                            </ Card>
                        </ Col>
                    </ Row>

                    <Row>
                        <Col sm="12" lg="4">
                            <Card id="mobile-6" className="card menuCard col-lg col-mg-2 col-sm-4">
                                <img src="img/cheeseburger.jpeg" alt="burger" className="menuImg imgFluid" />
                                <ReviewStar number={3} />

                                <p className="dishName">Cheeseburger</p>
                                <p className="dishPrice">$<span>4.0</span></p>
                                <div>
                                    <button className="desktop orderBt">Order</button>
                                    <button className="desktop" onClick={() => this.toggleReview(6)} >Reviews</button>
                                </div>
                            </ Card>
                        </ Col>

                        <Col sm="12" lg="4">
                            <Card id="mobile-7" className="card menuCard col-lg col-mg-2 col-sm-4">
                                <img src="img/double cheeseburger.jpeg" alt="burger" className="menuImg imgFluid" />
                                <ReviewStar number={3} />

                                <p className="dishName">Double Cheeseburger</p>
                                <p className="dishPrice">$<span>5.5</span></p>
                                <div>
                                    <button className="desktop orderBt">Order</button>
                                    <button className="desktop" onClick={() => this.toggleReview(7) }>Reviews</button>
                                </div>
                            </ Card>
                        </ Col>

                        <Col sm="12" lg="4">
                            <Card id="mobile-8" className="card menuCard col-lg col-mg-2 col-sm-4">
                                <img src="img/triple cheeseburger.jpeg" alt="burger" className="menuImg imgFluid" />
                                <ReviewStar number={3} />

                                <p className="dishName">Triple Cheeseburger</p>
                                <p className="dishPrice">$<span>6.0</span></p>
                                <div>
                                    <button className="desktop orderBt">Order</button>
                                    <button className="desktop" onClick={() => this.toggleReview(8)} >Reviews</button>
                                </div>
                            </ Card>
                        </ Col>
                    </ Row>

                    <Row>
                        <Col sm="12" lg="4">
                            <Card id="mobile-9" className="card menuCard col-lg col-mg-2 col-sm-4">
                                <img src="img/chicken tenders.jpeg" alt="fries" className="menuImg imgFluid" />
                                <ReviewStar number={5} />

                                <p className="dishName">Chicken Tenders</p>
                                <p className="dishPrice">$<span>5.0</span></p>
                                <div>
                                    <button className="desktop orderBt">Order</button>
                                    <button className="desktop" onClick={() => this.toggleReview(9)} >Reviews</button>
                                </div>
                            </ Card>
                        </ Col>

                        <Col sm="12" lg="4">
                            <Card id="mobile-10" className="card menuCard col-lg col-mg-2 col-sm-4">
                                <img src="img/bacon mcdouble.jpeg" alt="burger" className="menuImg imgFluid" />
                                <ReviewStar number={4} />

                                <p className="dishName">Bacon McDouble</p>
                                <p className="dishPrice">$<span>6.0</span></p>
                                <div>
                                    <button className="desktop orderBt">Order</button>
                                    <button className="desktop" onClick={() => this.toggleReview(10)} >Reviews</button>
                                </div>
                            </ Card>
                        </ Col>

                        <Col sm="12" lg="4">
                            <Card id="mobile-11" className="card menuCard col-lg col-mg-2 col-sm-4">
                                <img src="img/mcchicken.jpeg" alt="burger" className="menuImg imgFluid" />
                                <ReviewStar number={5} />

                                <p className="dishName">McChicken</p>
                                <p className="dishPrice">$<span>3.5</span></p>
                                <div>
                                    <button className="desktop orderBt">Order</button>
                                    <button className="desktop" onClick={() => this.toggleReview(11)} >Reviews</button>
                                </div>
                            </ Card>
                        </ Col>
                    </ Row>
                </div>
            </div>
            
            <div>
                {this.review()}
            </div>            
            </>
        );
    }
}

export default MenuPage;