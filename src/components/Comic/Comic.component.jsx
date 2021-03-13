import React, { useState } from 'react';
import './Comic.styles.scss';

const Comic = ({ comic }) => {
    const [getState, setState] = useState({ clicked: false });
    const { clicked } = getState;

    const onClick = () => {
        setState({ clicked: !clicked });
    }

    return (
        <li className="comic" onClick={onClick} >
            {
                comic.images.length > 0 ? (
                    <img className="comicImg" src={comic.images[0].path + '/portrait_xlarge.jpg'} alt={comic.title} />
                ) : <span className="imgPlaceholder" ></span>
            }
            <span className="comicTitle" >{comic.title}</span>

            {
                clicked ? (
                    <div className="comicOptions">
                        <div className="btnsBox">
                            <button className="btn comicDetails">Detalhes</button>
                            <button className="btn selectComic">Selecionar</button>
                        </div>
                    </div>
                ) : null
            }

        </li>
    )
}

export default Comic;