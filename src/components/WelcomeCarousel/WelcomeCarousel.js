import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import './WelcomeCarousel.scss'

export default class WelcomeCarousel extends Component {
    render(){
        return (
            <div className="welcome-carousel">
                <Jumbotron>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="../assets/images/carouselHome/premierslide1.jpg"
                                alt="slide"
                                />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="../assets/images/carouselHome/premierslide2.jpg"
                                alt="slide"
                                />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="../assets/images/carouselHome/premierslide3.jpg"
                                alt="slide"
                                />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="../assets/images/carouselHome/premierslide4.jpg"
                                alt="slide"
                                />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="../assets/images/carouselHome/premierslide5.jpg"
                                alt="slide"
                                />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="../assets/images/carouselHome/premierslide6.jpg"
                                alt="slide"
                                />
                        </Carousel.Item>
                    </Carousel>
                </Jumbotron>
            </div>
        )
    }
}