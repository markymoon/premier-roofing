import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const images = [
    '../assets/images/gallery/akron_machine/akronmachine001.jpg',
    '../assets/images/gallery/akron_machine/akronmachine002.jpg',
    '../assets/images/gallery/akron_machine/akronmachine003.jpg',
    '../assets/images/gallery/akron_machine/akronmachine004.jpg',
    '../assets/images/branding/premierlogo512small.png',
];

export default class AkronMachine extends Component {
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
                <a type="image" onClick={() => this.setState({ isOpen: true })}>
                    <img src="../assets/images/gallery/buttons/akron_special_machine.gif" alt="Akron Special Machine" />
                </a>

                {isOpen && (
                <Lightbox
                    imageTitle="Akron Special Machine"
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