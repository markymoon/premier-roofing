import React, { Component } from 'react'

// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';
import Disaster from './Disaster'
import Corwin from './Corwin'
import Curb from './Curb'
import DSDist from './DSDist'
import Jascar from './Jascar'
import AkronMachine from './AkronMachine'
import Bergey from './Bergey'
import CleveClinic from './CleveClinic'
import Highland from './Highland'
import Pentair from './Pentair'
import PentairSilo from './PentairSilo'
import Repairs from './Repairs'
import Sunway from './Sunway'
import Tasks from './Tasks'
import Welser from './Welser'
import './Gallery.scss'

  
class Gallery extends Component {
        // const [modalShow, setModalShow] = React.useState(false);
    render() {
        return(
            <div className="gallery">
                <main role="main">
                    <h1>Gallery</h1>
                    <p>Click image to view project</p>
                    <section>
                        {/* ROW 1 */}
                        <div className="row">
                            <div className="gallery-btn">
                                {/* <a href="#" onClick={() => DisasterModal()}><img src="../assets/images/gallery/buttons/disaster.gif" alt="" /></a> */}
                                <Disaster />
                            </div>
                            <div className="gallery-btn">
                                {/* <a href="#"><img src="../assets/images/gallery/buttons/corwin.gif" alt="" /></a> */}
                                <Corwin />
                            </div>
                            <div className="gallery-btn">
                                {/* <a href="#"><img src="../assets/images/gallery/buttons/curb_installation.gif" alt="" /></a> */}
                                <Curb />
                            </div>
                            <div className="gallery-btn">
                                {/* <a href="#"><img src="../assets/images/gallery/buttons/D_S_Distribution.gif" alt="" /></a> */}
                                <DSDist />
                            </div>
                            <div className="gallery-btn">
                                {/* <a href="#"><img src="../assets/images/gallery/buttons/jascar.gif" alt="" /></a> */}
                                <Jascar />
                            </div>
                        {/* </div> */}

                        {/* ROW 2 */}
                        {/* <div className="row"> */}
                            <div className="gallery-btn">
                                {/* <a href="#"><img src="../assets/images/gallery/buttons/cleve_clinic.gif" alt="" /></a> */}
                                <CleveClinic />
                            </div>
                            <div className="gallery-btn">
                                {/* <a href="#"><img src="../assets/images/gallery/buttons/pentair.gif" alt="" /></a> */}
                                <Pentair />
                            </div>
                            <div className="gallery-btn">
                                {/* <a href="#"><img src="../assets/images/gallery/buttons/pentair_silos.gif" alt="" /></a> */}
                                <PentairSilo />
                            </div>
                            <div className="gallery-btn">
                                {/* <a href="#"><img src="../assets/images/gallery/buttons/sunway.gif" alt="" /></a> */}
                                <Sunway />
                            </div>
                            <div className="gallery-btn">
                                {/* <a href="#"><img src="../assets/images/gallery/buttons/welser.gif" alt="" /></a> */}
                                <Welser />
                            </div>
                        {/* </div> */}

                        {/* ROW 3 */}
                        {/* <div className="row"> */}
                            <div className="gallery-btn">
                                {/* <a href="#"><img src="../assets/images/gallery/buttons/tasks.gif" alt="" /></a> */}
                                <Tasks />
                            </div>
                            <div className="gallery-btn">
                                {/* <a href="#"><img src="../assets/images/gallery/buttons/repairs.gif" alt="" /></a> */}
                                <Repairs />
                            </div>
                            <div className="gallery-btn">
                                {/* <a href="#"><img src="../assets/images/gallery/buttons/akron_special_machine.gif" alt="" /></a> */}
                                <AkronMachine />
                            </div>
                            <div className="gallery-btn">
                                {/* <a href="#"><img src="../assets/images/gallery/buttons/highland_schools.gif" alt="" /></a> */}
                                <Highland />
                            </div>
                            <div className="gallery-btn">
                                {/* <a href="#"><img src="../assets/images/gallery/buttons/bergey.gif" alt="" /></a> */}
                                <Bergey />
                            </div>
                        </div>
                        
                    </section>
                </main>
            </div>
        )
    }
}

export default Gallery