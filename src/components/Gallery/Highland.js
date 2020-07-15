import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const images = [
    '../assets/images/gallery/highlandschools/highland001.jpg',
    '../assets/images/gallery/highlandschools/highland002.jpg',
    '../assets/images/gallery/highlandschools/highland003.jpg',
    '../assets/images/branding/premierlogo512small.png',
];

export default class Highland extends Component {
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
                <a type="link" href="#" onClick={() => this.setState({ isOpen: true })}>
                    <img src="../assets/images/gallery/buttons/highland_schools.gif" alt="Highland Schools Re-Roof" />
                </a>

                {isOpen && (
                <Lightbox
                    imageTitle="Highland Schools Re-Roof"
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