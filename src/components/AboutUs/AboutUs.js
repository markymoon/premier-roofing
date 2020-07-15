import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './AboutUs.scss'

class AboutUs extends Component {
    render() {
        return (
            <div className="about-us">
                <div className="page-banner"> 
                    {/* <img src="../assets/images/about/premier-roof-test-farm.jpg" alt="Premier Roof Systems Inc's test farm." /> */}
                    <img src="../assets/images/about/test.jpg" alt="Premier Roof Systems Inc's test farm." />
                </div>
                <main role="main">
                    <h1>ABOUT US</h1>

                    <section>
                        <p>Did you ever notice when you mention “Roofing Contractor” to someone, frequently their first comment is something less than complimentary? Often a short story follows detailing a bad experience with an unreliable contractor, a roof system failure, or both. If it hasn’t happened to you, chances are you know someone it has.</p>
                        
                        <p>Unfortunately, this story happens all too often in the commercial roofing industry. There are hundreds of different roof systems and contractors to choose from, so how do you determine what’s best for your needs? To make matters worse, the typical building owner only occasionally deals with roofing, making it even tougher to sort out inferior contractors and products.</p>

                            <aside>
                                <div className="callout">
                                <p>The moral here is TRUST.</p>

                                <p>The answer is PREMIER.</p>
                                </div>
                            </aside>
                        

                        <p>Premier Roof Systems, Inc. was established in 1987. Our management team has over 100 aggregate years experience in the commercial roofing industry. We’ve built our reputation on providing our customers with reliable service; on quality workmanship we’ll stand behind; and on recommending roof systems that are best suited to meet your needs, not ours.</p>


                        <p>We’ll take the guess work out of purchasing commercial roofing by proving Premier is a name you can trust.</p>


                        <p>Thank you,<br/>
                            Shane Vanderbilt.
                        </p>
                    </section>

                    <section>
                        <h2>Principal Management</h2>

                        <Card>
                            <Card.Body>
                                <Card.Title>Shane Vanderbilt </Card.Title>
                                <Card.Subtitle>President &amp; founder</Card.Subtitle>
                                <Card.Text>
                                        Major responsibilities: Sales, Estimating, Accounting and Financial Administration, Customer Relations, Material Procurement.<br/>
                                        Hire date: 1987<br/>
                                        Experience: Entered the commercial roofing business in 1977
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                                <Card.Body>
                                    <Card.Title>Ronald Martin</Card.Title>
                                    <Card.Subtitle>Co-founder and Corporate Attorney</Card.Subtitle>
                                    <Card.Text>
                                        Major responsibilities: Aids in legal, accounting and management decisions.<br/>
                                        Hire date: 1987
                                    </Card.Text>
                                </Card.Body>
                        </Card>

                        <Card>
                                <Card.Body>
                                    <Card.Title>Joshua McCall</Card.Title>
                                    <Card.Subtitle>General Manager</Card.Subtitle>
                                    <Card.Text>
                                        Major responsibilities: Project management, regulatory compliance, safety, training, logistics, inventory, equipment maintenance.<br/>
                                        Hire Date: 1995<br/>
                                        Experience: Entered the commercial roofing business in 1995
                                    </Card.Text>
                                </Card.Body>
                        </Card>

                        <Card>
                                <Card.Body>
                                    <Card.Title>Christi Beverlin</Card.Title>
                                    <Card.Subtitle>Office Manager</Card.Subtitle>
                                    <Card.Text>
                                        Major responsibilities: Accounting, human resources, regulatory compliance, employee benefits.<br/>
                                        Hire date: 1987<br/>
                                        Experience: Entered the commercial roofing business in 1978
                                    </Card.Text>
                                </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Title>Doug Hill Jr</Card.Title>
                                <Card.Subtitle>Field Superintendant</Card.Subtitle>
                                <Card.Text>
                                    Hire date: 2008<br/>
                                    Experience: Entered the commercial roofing business in 2008
                                    </Card.Text>
                                </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Title>Justin Wemmer</Card.Title>
                                <Card.Subtitle>Field Superintendant</Card.Subtitle>
                                <Card.Text>
                                    Hire date: 2011<br/>
                                    Experience: Entered the commercial roofing business in 2000</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Title>John Thornton</Card.Title>
                                <Card.Subtitle>Lead Journeyman</Card.Subtitle>
                                <Card.Text>
                                    Hire date: 1997<br/>
                                    Experience: Entered the commercial roofing business in 1990
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </section>

                    <section>
                        <h2>COMPANY INFORMATION</h2>
                        <p>
                            Location: 471 E. Bergey St.,<br/> Wadsworth, OH 44281<br/>
                            Office Hours: 8am – 5pm,<br/> Monday through Friday
                        </p>
                    </section>

                    <section>
                        <h2>MARKETING AREA</h2>

                        <p>Primarily Medina, Wayne, Summit, Stark, and Ashland Counties. Also selected projects throughout Northeast Ohio and the eastern United States</p>
                    </section>

                    <section>
                        <h2>AFFILIATIONS</h2>
                            <p>Member of The Ohio Roofing Contractors Association (ORCA)<br/>
                                Member of ORCA Ohio Workers Compensation group rating program <br/>
                                Member of the Wadsworth Chamber of Commerce<br/>
                                Participant in Bureau of Workers’ Compensation Drug-Free Workplace</p>
                    </section>

                    <section>
                        <h2>INSURANCE</h2>
                        <h3>FCCI Insurance Group</h3>
                        Agent: Arthur J. Gallagher Risk Management<br/>
                        Representative: Mr. Jon Tomaselli<br/> (330) 665-7975<br/>
                        Liability Limit: $3,000,000.00
                    </section>

                    <section>
                        <h2>BONDING CAPABILITIES</h2>
                        Job by job basis, through various bonding companies.
                    </section>

                    <section>
                        <h2>BANKING</h2>
                        <h3>PNC Bank</h3>
                        Wadsworth, OH 44281<br/>
                        (330) 335-2394
                    </section>

                    <section>
                        <h2>FINANCIAL STRENGTH</h2>
                        <p>Prudent management and conservative fiscal policy have enabled Premier to operate from our own working capital for decades. We stock more commercial roofing inventory than ten ordinary contractors combined and even some of the distributors in the area. Our long and successful history of financial stability insures that your project will be executed without issue. Our customers need not worry about potential material lien filings, nor do we ask for any sort of upfront money prior to starting your project. You should beware of any contractor that does.</p>
                        <p>Premier has never had a material lien filed against one of our projects.</p>
                        <p>Premier has never defaulted on a contract.</p>
                        <p>Premier has never failed to successfully complete a project.</p>
                        <p>Any contractor that does surely indicates the absence of adequate working capital to maintain stability.</p>
                    </section>

                    <section>
                        <h2>CREDIT REFERENCES</h2>
                        <Card>
                            <Card.Body>
                                <Card.Title>ABC Supply Co.<br/> Mentor, OH</Card.Title>
                                <Card.Text>Attention: Mike Fetzer<br/> (440) 255-9200<br/> FAX (440) 255-8483</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Title>Soprema<br/> Wadsworth, OH</Card.Title>
                                <Card.Text>Attention: Chris Maxwell<br/> (330) 334-0066<br/> FAX (330) 334-7903</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Title>Triangle Fastener Corp.<br/> Cleveland, OH</Card.Title>
                                <Card.Text>Attention: Ralph Borrhello<br/> (800) 227-4093<br/> FAX (216) 351-5008</Card.Text>
                            </Card.Body>
                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Title>Willoughby Supply<br/> Akron, OH</Card.Title>
                                <Card.Text>Attention: John Bradley<br/> (330) 630-6700<br/> FAX (330) 630-9630</Card.Text>
                            </Card.Body>
                        </Card>

                        <p><em>Additional references furnished upon request.</em></p>
                    </section>
                </main>
            </div>
        )
    }
}

export default AboutUs
