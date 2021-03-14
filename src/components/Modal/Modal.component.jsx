import React from 'react';
import './Modal.styles.scss';

import CloseButton from '../CloseButton/CloseButton.component';

const Modal = ({ show, content, onToggle }) => {

    const renderHelper = (content) => {
        if (content) {
            return (
                <div className={show ? 'modalBackground' : 'modalBackground hide'}>
                    <div className="innerContainer">
                        <CloseButton onClick={() => onToggle(null)} />
                        <div className="column">
                            {
                                content.images.length > 0 ? (
                                    content.images.map((image, index) => {
                                        return <img key={index} src={image.path + '/portrait_small.jpg'} alt="Comic Img" />
                                    })
                                ) : <h2>No images</h2>
                            }
                        </div>
                        <div className="column infos">
                            <h2 className="comicTitle">{content.title}</h2>

                            <h3>Description</h3>
                            {content.description !== null ?
                                (<p className="comicDescription"
                                    dangerouslySetInnerHTML={{ __html: content.description }}></p>)
                                : (<p className="comicDescription not">No Description</p>)}

                        </div>
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }

    return renderHelper(content);
}

export default Modal;