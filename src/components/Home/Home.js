import React, { Component } from 'react'
import WelcomeCarousel from '../WelcomeCarousel'
import './Home.scss'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <WelcomeCarousel />
                <div className="container">
                    <main role="main">
                        <div>
                            <p className="intro"><span className="home bold">Premier Roof Systems Inc.</span> is a full-service commercial / industrial contractor 
                                performing all facets of roofing and related sheet metal work.</p> 

                            <aside>
                                <div className="callout">
                                    <p>Large enough to do your million dollar replacement and small enough to care about your 
                                    hundred dollar repair.</p>
                                </div>
                            </aside>
                                
                            <p>Relationships define our reputation and our value is measured by a commitment to superior 
                                service and utilization of products that best suit your needs. </p>

                            <p>While occasionally undertaking new construction 
                                projects,<br/> <b>Premier's specialty is roof replacement of existing low slope roofs, working directly with 
                                the building owner.</b></p>

                            <div className="clearfix"></div>
                        </div>
                    </main>
                </div>
                
            </div>
            
        )
    }
}