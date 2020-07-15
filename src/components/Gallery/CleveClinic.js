import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const images = [
    '../assets/images/gallery/cleve_clinic/cleveclinic001.jpg',
    '../assets/images/gallery/cleve_clinic/cleveclinic002.jpg',
    '../assets/images/gallery/cleve_clinic/cleveclinic003.jpg',
    '../assets/images/gallery/cleve_clinic/cleveclinic004.jpg',
    '../assets/images/branding/premierlogo512small.png',
];

export default class CleveClinic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        }
    }

    render() {
        const { photoIndex, isOpen } = this.state;

        return(
            <div>
                <a href="#" onClick={() => this.setState({ isOpen: true })}>
                    <img src="../assets/images/gallery/buttons/cleve_clinic.gif" alt="Medina Hospital/Cleveland Clinic" />
                </a>

                {isOpen && (
                <Lightbox
                    imageTitle="Medina Hospital/Cleveland Clinic"
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + images.length - 1) % images.length,
                    })
                    }
                    onMoveNextRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + 1) % images.length,
                    })
                    }
                />
                )}
            </div>
        )
    }
}