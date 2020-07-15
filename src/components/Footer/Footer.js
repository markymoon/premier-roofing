import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Footer.scss'

export default class CompName extends Component {
    render() {
        return (
            <footer className="footer">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <img 
                                src="../assets/images/branding/premierlogo512.svg" 
                                height='50'
                                className="d-inline-block" 
                                alt="Premier Roofing" />
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12} md={4}>
                            <p><b>Premier Roof Systems Inc.</b><br/> 
                                471 East Bergey St. <br/> 
                                Wadsworth, OH 44281 <br/> 
                                <a href="tel:(330) 335-1576">(330) 335-1576</a> <br/>
                                Fax: (330) 335-1577
                            </p>
                        </Col>

                        <Col sm={12} md={4} className="border-left">
                            <p>
                                <b>Serving Northeast Ohio</b><br/>
                                Primarily Medina, Wayne, Summit, Stark, and Ashland Counties since 1987.
                            </p>
                        </Col>
                        
                        <Col sm={12} md={4} className="footer-links">
                            <a href="/aboutUs">About Us</a><br/>
                            <a href="/services">Our Services</a><br/>
                            <a href="/products">Products</a><br/>
                            <a href="/contact">Contact</a>
                        </Col>
                    </Row>
                </Container>
                
                <div className="copy">
                    Copyright &copy; 2020 Premier Roof Systems Inc. All rights reserved. | <a href="/sitemap">Sitemap</a> <br/> Design &amp; Development by <a href="http://mkultra-media.com/">MK Ultra Media</a>
                </div>
            </footer>
        )
    }
}