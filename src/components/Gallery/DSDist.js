import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const images = [
    '../assets/images/gallery/ds_dist/dsdistributionunitremoval001.jpeg',
    '../assets/images/gallery/ds_dist/dsdistributionunitremoval002.jpeg',
    '../assets/images/gallery/ds_dist/dsdistributionunitremoval003.jpeg',
    '../assets/images/gallery/ds_dist/dsdistributionunitremoval004.jpeg',
    '../assets/images/gallery/ds_dist/dsdistributionunitremoval005.jpeg',
    '../assets/images/gallery/ds_dist/dsdistributionunitremoval006.jpeg',
    '../assets/images/branding/premierlogo512small.png',
];

export default class DSDist extends Component {
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
                    <img src="../assets/images/gallery/buttons/D_S_Distribution.gif" alt="D&amp;S Distribution" />
                </a>

                {isOpen && (
                <Lightbox
                    imageTitle="D&amp;S Distribution"
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