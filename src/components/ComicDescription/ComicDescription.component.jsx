import React from 'react';
import './ComicDescription.styles.scss';

const ComicDescription = ({ description }) => {

    const renderHelper = () => {
        if (description) {
            return (
                <p className="comicDescription"
                    dangerouslySetInnerHTML={{ __html: description }}></p>
            )
        } else {
            return <p className="errorMsg">Not available</p>
        }
    }

    return (
        <>
            <h3 className="descriptionTitle">Description</h3>
            { renderHelper()}
        </>
    )
}

export default ComicDescription;