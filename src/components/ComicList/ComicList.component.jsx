import React from 'react';
import './ComicList.styles.scss';

import Comic from '../Comic/Comic.component';


const ComicList = ({ comics }) => {

    return (
        <ul className="comicList">
            {
                comics.length > 0 ? (
                    comics.map((comic, index) => (
                        <Comic
                            key={index} comic={comic}
                        />
                    ))
                ) : null
            }
        </ul>
    )
}

export default ComicList;