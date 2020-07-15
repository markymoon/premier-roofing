import React, { Component } from 'react'

class Sitemap extends Component {
    render() {
        return (
            <div className="sitemap">
                <main role="main">
                    <section>
                        <h1>Sitemap</h1>

                        <ul>    
                            <li><a href="/index">Premier Roof Systems, Inc. | Commercial Roofing serving:<br/> Akron, Canton, Cleveland, Medina, Wadsworth, Copley, Norton,<br/> Medina County, Wayne County, Summit County, Stark County and Ashland County</a></li>
                            <li>Our Company
                                <ul>
                                    <li><a href="/aboutUs">About Us</a></li>
                                    <li><a href="/testimonials">Testimonials</a></li>
                                    <li><a href="/references">References</a></li>
                                </ul>
                            </li>
                            <li>What We Do
                                <ul>
                                    <li><a href="/services">Services</a></li>
                                    <li><a href="/products">Products</a></li>
                                    <li><a href="/maintenance">Maintenance</a></li>
                                    <li><a href="/safety">Safety</a></li>
                                    <li><a href="/testfarm">Test Farm</a></li>
                                </ul>
                            </li>
                            <li><a href="/gallery">Premier Roof System's Project Gallery</a></li>
                            <li><a href="/contact">Contact Premier Roof Systems Inc.</a></li>
                        </ul>
                    </section>
                </main>
            </div>
        )
    }
}

export default Sitemap