import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const images = [
    '../assets/images/gallery/repairs/repairs001.jpg',
    '../assets/images/gallery/repairs/repairs002.jpg',
    '../assets/images/gallery/repairs/repairs003.jpg',
    '../assets/images/gallery/repairs/repairs004.jpg',
    '../assets/images/gallery/repairs/repairs005.jpg',
    '../assets/images/gallery/repairs/repairs006.jpg',
    '../assets/images/branding/premierlogo512small.png',
];

export default class Repairs extends Component {
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
                    <img src="../assets/images/gallery/buttons/repairs.gif" alt="Repairs" />
                </a>

                {isOpen && (
                <Lightbox
                    imageTitle="Repairs"
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