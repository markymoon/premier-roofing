import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const images = [
    '../assets/images/gallery/corwin/corwin001.jpg',
    '../assets/images/gallery/corwin/corwin002.jpg',
    '../assets/images/gallery/corwin/corwin003.jpg',
    '../assets/images/gallery/corwin/corwin004.jpg',
    '../assets/images/gallery/corwin/corwin005.jpg',
    '../assets/images/gallery/corwin/corwin006.jpg',
    '../assets/images/gallery/corwin/corwin007.jpg',
    '../assets/images/gallery/corwin/corwin008.jpg',
    '../assets/images/gallery/corwin/corwin009.jpg',
    '../assets/images/gallery/corwin/corwin010.jpg',
    '../assets/images/branding/premierlogo512small.png',
];

export default class Corwin extends Component {
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
                    <img src="../assets/images/gallery/buttons/corwin.gif" alt="Corwin" />
                </a>

                {isOpen && (
                <Lightbox
                    imageTitle="Corwin"
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