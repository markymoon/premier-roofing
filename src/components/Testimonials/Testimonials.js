import React, { Component } from 'react'
import TestimonialSlider from './TestimonialSlider'
import './Testimonials.scss'

class Testimonials extends Component {
    render() {
        return (
            <div className="testimonials container">
                
                <main role="main">
                    <h1>Testimonials</h1>
                    <section className="slider">
                        {/* <TestimonialSlider controls="false" /> */}
                    </section>

                    <section>
                        <div>
                            <p>“With every rain that beats down on our flat roof we know we made the right choice with Premier.  
                                We were in for serious problems without your intervention.  I know the other section of the roof 
                                will eventually need to be replaced but for now we are trying to maintain it like our reps from 
                                Soprema and Premier explained to us.  With our heating and cooling units being so old and fragile 
                                we just can't afford that now.  We're waiting for technology to catch up so we can change the units 
                                and the roof.”</p>
                            <p>~ <b>Gayle Kelley,</b><br/>
                                Director of Operations and Finance<br/>
                                QDRO Consultants Co.<br/>
                                330-725-8685</p>
                            <div className="divider"></div>
                        </div>

                        <div>
                            <p>“A complete re-roof with tear off and HVAC upgrade over our sales office – with no disruption to 
                                the staff. Super job!”</p>
                            <p>~ <b>Mrs. Sue Cleckner,</b><br/> 
                                Cornwell Quality Tools,<br/> 
                                Wadsworth, OH<br/>
                                330-336-3506</p>
                            <div className="divider"></div>
                        </div>


                        <div>
                            <p>“I’ve used Shane (Premier’s owner) for my roof work for over 30 years. The friendship we’ve built 
                                has been as rewarding as their good work.”</p>
                            <p>~ <b>Mr. Roger Geiser,</b><br/> 
                                G & S Titanium,<br/> 
                                Wooster, OH<br/> (Retired)</p>
                            <div className="divider"></div>
                        </div>


                        <div>
                            <p>“Premier was the successful bidder for a 100,000 sq. ft. roof and deck replacement project at 
                                our Nichols facility in 1996. Based on their performance and competitiveness on that project, 
                                they’ve done all our work since. Also pleasing is the friendship and trust that’s developed from 
                                this successful business relationship.”</p>
                            <p>~ <b>Mr. Jon Ansel,</b><br/> 
                                D &amp; S Distribution,<br/> 
                                Wooster, OH<br/>
                                 330-264-7400</p>
                            <div className="divider"></div>
                        </div>


                        <div>
                            <p>“Premier successfully completed over $1.5 million in roof and deck replacement, demolition, 
                                and general contracting work at our Shelby, Ohio facility.</p>
                            <p>Given the timing and difficult nature of the project, I really don’t think anyone else could 
                                have pulled it off. Considering my office is in Richmond, I really had to put my trust in them, 
                                and was very pleased with their performance.”</p>
                            <p>~ <b>Mr. Kitt Moore,</b><br/> 
                                CCA Industries,<br/> 
                                Richmond, VA<br/> (Retired)</p>
                            
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default Testimonials