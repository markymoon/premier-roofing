import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Safety.scss'

class Safety extends Component {
    render() {
        return(
            <div className="safety">
                <main role="main">
                    <h1>Safety</h1>
                    
                    <Container>
                        <Row>
                            <Col sm={12} md={6}>
                                <p>In house and out sourced routine OSHA safety training.</p>
                                <p>Routine jobsite safety inspections including mock OSHA jobsite 
                                    inspections by an independent safety consultant.</p>

                                <p>Participant in the Ohio Worker’s Compensation drug-free safety program 
                                    since its inception.</p>

                                <p>Member of Worker’s Compensation group rating program.</p>

                                <p>SAFETY;<br/>
                                    Another reason to make Premier your contractor of choice.</p>
                            </Col>
                            <Col className="safety-logos" sm={12} md={6}>
                                <div>
                                    <img src="../assets/images/safety/US-OSHA-Logo.svg" alt="OSHA logo" />
                                </div>

                                <div>
                                    <img src="../assets/images/safety/workerscomp.gif" alt="Ohio Bureau of Workers' Compensation logo" />
                                </div>

                                <div>
                                    <img src="../assets/images/safety/id432ohioroofingcontractors.gif" alt="Ohio Roofing Contractors Association logo" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </main>
            </div>
        )
    }
}

export default Safety
