import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import './TestimonialSlider.scss'

export default class TestimonialSlider extends Component {
    render() {
        return(
            <div className="testimonial-slider">
                <Carousel>
                    <Carousel.Item>
                        <div className="container">
                            <div className="row">
                                <div className="col quote short">
                                    <p>“A complete re-roof with tear off and HVAC upgrade over our sales office – 
                                        with no disruption to the staff. Super job!”</p>
                                </div>
                                <div className="col customer">
                                    <p><span className="client">Mrs. Sue Cleckner</span><br/> 
                                    Cornwell Quality Tools,<br/> 
                                    Wadsworth, OH<br/>
                                    330-336-3506</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="container">
                            <div className="row">
                                <div className="col quote short">
                                    <p>“I’ve used Shane (Premier’s owner) for my roof work for over 30 years. 
                                        The friendship we’ve built has been as rewarding as their good work.”</p>
                                </div>
                                <div className="col customer">
                                    <p><span className="client"> Mr. Roger Geiser</span><br/> 
                                    G &amp; S Titanium,<br/> 
                                    Wooster, OH<br/> 
                                    330-263-0564</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="container">
                            <div className="row">
                                <div className="col quote">
                                    <p>“Premier was the successful bidder for a 100,000 sq. ft. roof and deck replacement 
                                        project at our Nichols facility in 1996. Based on their performance and competitiveness 
                                        on that project, they’ve done all our work since. Also pleasing is the friendship and trust 
                                        that’s developed from this successful business relationship.”</p>
                                </div>
                                <div className="col customer">
                                    <p><span className="client">Mr. Jon Ansel</span><br/>
                                    D &amp; S Distribution,<br/> 
                                    Wooster, OH<br/> 
                                    330-264-7400</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div className="container">
                            <div className="row">
                                <div className="col quote long">
                                    <p>“Premier successfully completed over $1.5 million in roof and deck replacement, demolition, 
                                        and general contracting work at our Shelby, Ohio facility.</p>
                                    <p>Given the timing and difficult nature of the project, I really don’t think anyone else could 
                                        have pulled it off. Considering my office is in Richmond, I really had to put my trust in them, 
                                        and was very pleased with their performance.”</p>
                                </div>
                                <div className="col customer">
                                    <p><span className="client">Mr. Kitt Moore</span>
                                    <br/>CCA Industries, 
                                    <br/>Richmond, VA (Retired)</p>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}