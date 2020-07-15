import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const images = [
    '../assets/images/gallery/welser_skylight/welserskylight001.jpeg',
    '../assets/images/gallery/welser_skylight/welserskylight002.jpeg',
    '../assets/images/gallery/welser_skylight/welserskylight003.jpeg',
    '../assets/images/gallery/welser_skylight/welserskylight004.jpeg',
    '../assets/images/gallery/welser_skylight/welserskylight005.jpeg',
    '../assets/images/gallery/welser_skylight/welserskylight006.jpeg',
    '../assets/images/gallery/welser_skylight/welserskylight007.jpeg',
    '../assets/images/gallery/welser_skylight/welserskylight008.jpeg',
    '../assets/images/branding/premierlogo512small.png',
];

export default class Wesler extends Component {
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
                    <img src="../assets/images/gallery/buttons/welser.gif" alt="Welser Skylight" />
                </a>

                {isOpen && (
                <Lightbox
                    imageTitle="Welser Skylight"
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