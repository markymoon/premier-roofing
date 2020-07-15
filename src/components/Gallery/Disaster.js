import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const images = [
    '../assets/images/gallery/disaster/disaster001.jpg',
    '../assets/images/gallery/disaster/disaster002.jpg',
    '../assets/images/gallery/disaster/disaster003.jpg',
    '../assets/images/gallery/disaster/disaster004.jpg',
    '../assets/images/gallery/disaster/disaster005.jpg',
    '../assets/images/branding/premierlogo512small.png',
];

export default class Disaster extends Component {
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
                    <img src="../assets/images/gallery/buttons/disaster.gif" alt="Disaster Caused By Unqualified Roofer" />
                </a>

                {isOpen && (
                <Lightbox
                    imageTitle="Disaster Caused By Unqualified Roofer"
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