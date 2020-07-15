import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Services.scss'

class Services extends Component {
    render() {
        return(
            <div className="services ">
                {/* <div className="page-banner"> 
                    <img src="../assets/images/services/services-small.png" />
                </div> */}
                <main role="main">

                    <h1>Services</h1>
                    <Container>
                    <h3>Premier Roof Systems, Inc. is a full-service contractor performing all facets of commercial / industrial roofing removal, installation, maintenance, and related work, to include:</h3>
                        <Row>

                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    {/* <aside>
                                        <div className="callout">
                                            <img src="../assets/images/services/servicesOrig.gif" alt="Premier Roof Systems employees at work" />
                                        </div>
                                    </aside> */}

                                    <ul>
                                        <li>Planned inspection and preventative maintenance programs. Professional no-obligation roof surveys and specification preparation. Consulting, budgeting, long term planning.</li>
                                        <li>Moisture detection surveys.
                                        {/* <aside className="inline">
                                        <div className="callout">
                                            <img src="../assets/images/services/servicesOrig.gif" alt="Premier Roof Systems employees at work" />
                                        </div>
                                    </aside> */}
                                        </li>
                                        <li>Complete repair service of all systems, including proper, long-term repair procedures utilizing products compatible with your roof system. Expert identification of roof-top leaks and problem areas including those not caused by the roof system itself.</li>
                                        <li>Installation of all major types of low-slope commercial roofing systems and insulations.</li>
                                        <li>Installation of architectural standing seam metal roof systems.</li>
                                        <li>Tear-off and proper disposal of existing low-slope roofing materials.</li>
                                        <li>Commercial roof deck repair and replacement, to include: Steel, wood, concrete, tectum, gypsum, etc.</li>
                                        <li>Minor structural repairs.</li>
                                        <li>Minor related masonry repairs.</li>
                                        <li>Tapered insulation systems.</li>
                                        <li>Installation of roofing-related wood blocking.</li>
                                        <li>Installation and removal of roof hatches, equipment curbs, pipe supports, etc.</li>
                                        <li>Replacement and/or Conversion of old HVAC units to proper down-discharge configuration mounted on enclosed curbs.</li>
                                        <li>Roof drain installation and limited plumbing.</li>
                                        <li>Fabrication and installation of roof-related metal work, to include: Industrial gutter and accessories, wall copings, reglet flashings, facia edge trim, vertical siding, etc.</li>
                                        <li>Installation of all types of roof coating, to include: Asphaltic, aluminized, acrylic, silicone, etc.</li>
                                    </ul>
                                </div>
                            </Col>

                            <Col>
                                <div className=""> 
                                    <img src="../assets/images/services/servicesOrig.gif" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </main>
            </div>
        )
    }
}

export default Services 
