import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const images = [
    '../assets/images/gallery/jascar/jascar001.jpeg',
    '../assets/images/gallery/jascar/jascar002.jpeg',
    '../assets/images/gallery/jascar/jascar003.jpeg',
    '../assets/images/gallery/jascar/jascar004.jpeg',
    '../assets/images/gallery/jascar/jascar005.jpeg',
    '../assets/images/gallery/jascar/jascar006.jpeg',
    '../assets/images/gallery/jascar/jascar007.jpeg',
    '../assets/images/gallery/jascar/jascar008.jpeg',
    '../assets/images/branding/premierlogo512small.png',
];

export default class Jascar extends Component {
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
                    <img src="../assets/images/gallery/buttons/jascar.gif" alt="Jascar" />
                </a>

                {isOpen && (
                <Lightbox
                    imageTitle="Jascar"
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