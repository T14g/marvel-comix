import React, { useState } from 'react';
import './Comic.styles.scss';

import ComicImage from '../ComicImage/ComicImage.component';

const Comic = ({ comic, onSelect, isSelected, onToggleModal }) => {
    const [getState, setState] = useState({ clicked: false });
    const { clicked } = getState;

    const onClick = () => {
        setState({ clicked: !clicked });
    }

    const selectText = !isSelected ? 'Select' : 'Unselect';

    return (
        <li className={isSelected ? 'comic selected' : 'comic'} onClick={onClick} >

            <ComicImage comic={comic} size='xlarge'/>
            <span className="comicTitle" >{comic.title}</span>
            
            {
                clicked ? (
                    <div className="comicOptions">
                        <div className="btnsBox">
                            <button
                                className="btn comicDetails"
                                onClick={() => onToggleModal(comic)}
                            >Details</button>
                            
                            <button
                                className="btn selectComic"
                                onClick={() => onSelect(comic)}
                            >{selectText}</button>
                        </div>
                    </div>
                ) : null
            }

        </li>
    )
}

export default Comic;