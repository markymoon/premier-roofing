import React, { Component } from 'react'
import './Contact.scss'

class Contact extends Component {
    render() {
        return(
            <div className="contact container">
                <main role="main">
                    <h1>Contact</h1>
                    <div className="contact-wrapper">
                        <section>
                            <h2>Premier Roof Systems, Inc.</h2>
                            471 East Bergey, Wadsworth OH 44281<br/>
                            <em>(330) 335-1576 • Fax: (330) 335-1577</em>

                            <p>Hours of operation are 8:00 AM - 5:00 PM<br/>
                                Monday - Friday</p>
                        </section>

                        <section className="contact-list">
                            <h3 className="underline"> Email Contact List:</h3>
                            <div>Shane Vanderbilt: <a href="mailto:shane@premierroof.com">shane@premierroof.com</a></div>
                            <div>Josh McCall: <a href="mailto:josh@premierroof.com">josh@premierroof.com</a></div>
                            <div>Christi Beverlin: <a href="mailto:christi@premierroof.com">christi@premierroof.com</a></div>
                            <div>Candice Toth: <a href="mailto:candy@premierroof.com">candy@premierroof.com</a></div>
                        </section>
                    </div>
                </main>
            </div>
        )
    }
}

export default Contact
