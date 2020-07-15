import React, { Component } from 'react'
import './TestFarm'

class TestFarm extends Component {
    render() {
        return(
            <div className="test-farm">
                <div className="page-banner"> 
                    <img src="../assets/images/testfarm/aerial-test-farm.gif" />
                </div>
                <main role="main">
                    <h1>Test Farm</h1>

                    <section>
                        <p>We put our money where our mouth is and installed 19 different roof systems on our 
                            36,000 sq. ft. in Wadsworth, to see which ones perform the best... and the worst.</p>
                        
                        <p>You are cordially invited to take a no-obligation tour of our roof, as well as discuss 
                            the pros, cons, costs and value associated with each system.</p>
                        
                        <p>We think you’ll find it to be an invaluable tool to help you objectively determine 
                            which roof systems are best suited for your facility.</p>
                        
                        <p>We hope, along the way, your visit with us will convince you that the Premier Roof 
                            Systems should be your contractor of choice.</p>
                    </section>
                </main>
            </div>
        )
    }
}

export default TestFarm
