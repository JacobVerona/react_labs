import { Carousel } from "react-bootstrap";
import React, { Component } from "react";
import FirstImg from '../assets/1.jpg';
import SecondImg from '../assets/2.jpg';
import ThirdImg from '../assets/3.jpg';

class CarouselBoxHk extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={FirstImg}
                        alt="First" />
                    <Carousel.Caption>
                        <h3>First image</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={SecondImg}
                        alt="Second" />
                    <Carousel.Caption>
                        <h3>Second image</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBoxHk;