import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const images = [
    '../assets/images/gallery/curbInstallation/curbInstallation001.jpeg',
    '../assets/images/gallery/curbInstallation/curbInstallation002.jpeg',
    '../assets/images/gallery/curbInstallation/curbInstallation003.jpeg',
    '../assets/images/gallery/curbInstallation/curbInstallation004.jpeg',
    '../assets/images/gallery/curbInstallation/curbInstallation005.jpeg',
    '../assets/images/branding/premierlogo512small.png',
];

export default class Curb extends Component {
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
                <a type="link" onClick={() => this.setState({ isOpen: true })}>
                    <img src="../assets/images/gallery/buttons/curb_installation.gif" alt="Curb Installation" />
                </a>

                {isOpen && (
                <Lightbox
                    imageTitle="Curb Installation"
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