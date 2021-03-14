import React from 'react';
import './Modal.styles.scss';

import ComicImage from '../ComicImage/ComicImage.component';
import CloseButton from '../CloseButton/CloseButton.component';
import InlineList from '../InlineList/InlineList.component';
import ComicDescription from '../ComicDescription/ComicDescription.component';

const Modal = ({ show, content, onToggle }) => {

    const renderHelper = (content) => {
        if (content) {
            return (
                <div className={show ? 'modalBackground' : 'modalBackground hide'}>
                    <div className="innerContainer">
                        <CloseButton onClick={() => onToggle(null)} />

                        <div className="column image">
                            <ComicImage comic={content} size='uncanny' />
                        </div>

                        <div className="column infos">
                            <h2 className="comicTitle">{content.title}</h2>

                            <InlineList title="Creators" list={content.creators.items} />
                            <InlineList title="Characters" list={content.characters.items} />
                            <ComicDescription description={content.description} />

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