import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './Products.scss'

class Products extends Component {
    render() {
        return(
            <div className="products">
                <main role="main">
                    <h1>Products</h1>

                    <h2>Premier utilizes quality products offered by many manufacturers including:</h2>

                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <section>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>SINGLE PLY EPDM, TPO, PVC AND HYPALON ROOF SYSTEMS:</Card.Title>
                                            <Card.Text>
                                                Versico Roofing Systems<br/>
                                                Carlisle Syntec Systems<br/>
                                                Firestone Building Products<br/>
                                                Soprema<br/>
                                                Burke Hypalon
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                    <Card>
                                        <Card.Body>
                                            <Card.Title>MODIFIED BITUMEN ROOF SYSTEMS:</Card.Title>
                                            <Card.Text>
                                                Soprema<br/>
                                                Derbigum Roofing Solutions<br/>
                                                Firestone Building Products<br/>
                                                Johns Manville<br/>
                                                Bitec<br/>
                                                GAF
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                    <Card>
                                        <Card.Body>
                                            <Card.Title>BUILT-UP ROOF SYSTEMS:</Card.Title>
                                            <Card.Text>
                                                Johns Manville<br/>
                                                GAF
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                    <Card>
                                        <Card.Body>
                                            <Card.Title>SINGLE PLY RETRO-FIT SYSTEMS FOR PREENGINEERED METAL BUILDING ROOFS:</Card.Title>
                                            <Card.Text>
                                                Versico Roofing Systems<br/>
                                                Carlisle Syntec Systems<br/>
                                                Firestone Building Products
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                    <Card>
                                        <Card.Body>
                                            <Card.Title>INSULATION:</Card.Title>
                                            <Card.Text>
                                                Hunter Panels<br/>
                                                Atlas<br/>
                                                Georgia Pacific<br/> 
                                                DensDeck<br/>
                                                USG<br/> 
                                                Securock<br/>
                                                Roxul
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                    <Card>
                                        <Card.Body>
                                            <Card.Title>ARCHITECTURAL METAL ROOF SYSTEMS:</Card.Title>
                                            <Card.Text>Dimensional Metals Inc.</Card.Text>
                                        </Card.Body>
                                    </Card>

                                    <Card>
                                        <Card.Body>
                                            <Card.Title>COATINGS, CAULKINGS, SEALANTS, ROOF CEMENTS, ADHESIVES:</Card.Title>
                                            <Card.Text>
                                                Soprema<br/>
                                                Tremco<br/>
                                                ER Systems<br/>
                                                Apoc<br/>
                                                Karnak<br/>
                                                OSI<br/>
                                                Mulehide<br/>
                                                OMG Roofing Products<br/>
                                                Geocel<br/>
                                                Triangle Fastener Corp Buildex<br/>
                                                ALCM<br/>
                                                Fomo Products<br/>
                                                Chemlink<br/>
                                                Dow<br/>
                                                Brewer
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                    <Card>
                                        <Card.Body>
                                            <Card.Title>SKYLIGHTS, HATCHES, SMOKE VENTS, ROOF ACCESSORIES:</Card.Title>
                                            <Card.Text>
                                                Metal Era<br/>
                                                Hickman Engineered Systems<br/>
                                                Bilco<br/>
                                                Milcor<br/>
                                                Babcock-Davis<br/>
                                                Natural Light<br/>
                                                Wasco<br/>
                                                Bristolite<br/>
                                                Velux<br/>
                                                Marathon<br/>
                                                Oatey<br/>
                                                Marathon<br/>
                                                Josam<br/>
                                                Zurn<br/>
                                                Portals Plus<br/>
                                                Buildex<br/>
                                                Trufast<br/>
                                                SFS Intec Dekfast
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </section>

                            </div>

                            <div className="col icons">
                                <div className="icon-wrapper">
                                    <div className="versicobutton button">
                                        <a href="http://www.versico.com" rel="noopener noreferrer" onclick="target='_blank';" title="Versico" target="_blank">
                                            <span className="sr-only">Versico Roofing Systems</span>
                                        </a>
                                    </div>

                                    <div className="gafbutton button">
                                        <a href="http://www.gaf.com" rel="noopener noreferrer" onclick="target='_blank';" title="GAF" target="_blank">
                                            <span className="sr-only">GAF</span>
                                        </a>
                                    </div>

                                    <div className="carlislebutton button">
                                        <a href="http://www.carlislesyntec.com" rel="noopener noreferrer" onclick="target='_blank';" title="Carlisle" target="_blank">
                                            <span className="sr-only">Carlisle Syntec Systems</span>
                                        </a>
                                    </div>

                                    <div className="johnsmanvillebutton button">
                                        <a href="http://www.jm.com" rel="noopener noreferrer" onclick="target='_blank';" title="Johns Manville" target="_blank">
                                            <span className="sr-only">Johns Manville</span>
                                        </a>
                                    </div>

                                    <div className="dmibutton button">
                                        <a href="http://www.dmimetals.com" rel="noopener noreferrer" onclick="target='_blank';" title="DMI - Dimensional Metals, Inc." target="_blank">
                                            <span className="sr-only">DMI - Dimensional Metals, Inc.</span>
                                        </a>
                                    </div>

                                    <div className="firestonebutton button">
                                        <a href="http://firestonebpco.com" rel="noopener noreferrer" onclick="target='_blank';" title="Firestone Building Products" target="_blank">
                                            <span className="sr-only">Firestone Building Products</span>
                                        </a>
                                    </div>

                                    <div className="chemlinkbutton button">
                                        <a href="http://www.chemlink.com" rel="noopener noreferrer" onclick="target='_blank';" title="ChemLink Polymer Innovation" target="_blank">
                                            <span className="sr-only">ChemLink Polymer Innovation</span>
                                        </a>
                                    </div>

                                    <div className="tfcbutton button">
                                        <a href="http://www.trianglefastener.com" rel="noopener noreferrer" onclick="target='_blank';" title="Triangle Fastener Corporation" target="_blank">
                                            <span className="sr-only">Triangle Fastener Corporation</span>
                                        </a>
                                    </div>

                                    <div className="karnakbutton button">
                                        <a href="http://karnakcorp.com" rel="noopener noreferrer" onclick="target='_blank';" title="karnak" target="_blank">
                                            <span className="sr-only">karnak</span>
                                        </a>
                                    </div>

                                    <div className="georgiabutton button">
                                        <a href="http://www.buildgp.com/roofboard_densdeck" rel="noopener noreferrer" onclick="target='_blank';" title="Georgia-Pacific" target="_blank">
                                            <span className="sr-only">Georgia-Pacific</span>
                                        </a>
                                    </div>

                                    <div className="bilcobutton button">
                                        <a href="http://www.bilco.com" rel="noopener noreferrer" onclick="target='_blank';" title="Bilco" target="_blank">
                                            <span className="sr-only">Bilco</span>
                                        </a>
                                    </div>

                                    <div className="mulehidebutton button">
                                        <a href="http://www.mulehide.com" rel="noopener noreferrer" onclick="target='_blank';" title="Mule Hide Products" target="_blank">
                                            <span className="sr-only">Mule Hide Products</span>
                                        </a>
                                    </div>

                                    <div className="derbigumbutton button">
                                        <a href="http://www.derbigum.us" rel="noopener noreferrer" onclick="target='_blank';" title="Derbigum Roofing Solutions" target="_blank">
                                            <span className="sr-only">Derbigum Roofing Solutions</span>
                                        </a>
                                    </div>

                                    <div className="sopremabutton button">
                                        <a href="http://www.soprema.us" rel="noopener noreferrer" onclick="target='_blank';" title="Soprema" target="_blank">
                                            <span className="sr-only">Soprema</span>
                                        </a>
                                    </div>

                                    <div className="tremcobutton button">
                                        <a href="http://www.tremcoroofing.com" rel="noopener noreferrer" onclick="target='_blank';" title="Tremco" target="_blank">
                                            <span className="sr-only">Tremco</span>
                                        </a>
                                    </div>

                                    <div className="hunterbutton button">
                                        <a href="http://www.hpanels.com" rel="noopener noreferrer" onclick="target='_blank';" title="Hunter" target="_blank">
                                            <span className="sr-only">Hunter</span>
                                        </a>
                                    </div>

                                    <div className="bitecbutton button">
                                        <a href="http://www.bi-tec.com/index2.html" rel="noopener noreferrer" onclick="target='_blank';" title="Bitec" target="_blank">
                                            <span className="sr-only">Bitec</span>
                                        </a>
                                    </div>

                                    <div className="omgbutton button">
                                        <a href="http://www.omgroofing.com" rel="noopener noreferrer" onclick="target='_blank';" title="OMG Roofing Products" target="_blank">
                                            <span className="sr-only">OMG Roofing Products</span>
                                        </a>
                                    </div>

                                    <div className="portalsbutton button">
                                        <a href="http://www.portalsplus.com" rel="noopener noreferrer" onclick="target='_blank';" title="Portals Plus" target="_blank">
                                            <span className="sr-only">Portals Plus</span>
                                        </a>
                                    </div>

                                    <div className="itwbutton button">
                                        <a href="http://www.itwbuildex.com/" rel="noopener noreferrer" onclick="target='_blank';" title="ITW Buildex" target="_blank">
                                            <span className="sr-only">ITW Buildex</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Products
