import React from 'react';
import './ComicImage.styles.scss';


const ComicImage = ({ comic, size }) => {

    const imageSize = () => {

        if (size === 'medium') {
            return '/portrait_medium.jpg';
        } else if (size === 'xlarge') {
            return '/portrait_xlarge.jpg';
        } else if (size === 'small') {
            return '/portrait_small.jpg';
        } else {
            return '/portrait_medium.jpg'
        }

    }

    const renderHelper = () => {
        if (comic.images.length > 0) {
            let firstImage = comic.images[0].path;
            return <img  className={size + 'comicImg'}  src={firstImage + imageSize(size)} />
        } else {
            return <span className="imgPlaceholder">No image</span>
        }
    }

    return renderHelper();
}

export default ComicImage;