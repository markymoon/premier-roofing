import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const images = [
    '../assets/images/gallery/tasks/tasks001.jpg',
    '../assets/images/gallery/tasks/tasks002.jpg',
    '../assets/images/gallery/tasks/tasks003.jpg',
    '../assets/images/gallery/tasks/tasks004.jpg',
    '../assets/images/gallery/tasks/tasks005.jpg',
    '../assets/images/gallery/tasks/tasks006.jpg',
    '../assets/images/gallery/tasks/tasks007.jpg',
    '../assets/images/gallery/tasks/tasks008.jpg',
    '../assets/images/gallery/tasks/tasks009.jpg',
    '../assets/images/gallery/tasks/tasks010.jpg',
    '../assets/images/gallery/tasks/tasks011.jpg',
    '../assets/images/gallery/tasks/tasks012.jpg',
    '../assets/images/branding/premierlogo512small.png',
];

export default class Tasks extends Component {
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
                    <img src="../assets/images/gallery/buttons/tasks.gif" alt="Associated Roofing Tasks" />
                </a>

                {isOpen && (
                <Lightbox
                    imageTitle="Associated Tasks"
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