import React from 'react';
import './ComicList.styles.scss';

import Comic from '../Comic/Comic.component';


const ComicList = ({ comics, selectedComics, onSelectComic }) => {

    const handleSelect = (comic) => {
        if (!selectedComics) {
            onSelectComic([comic]);
        } else {
            if (!selectedComics.includes(comic)) {
                onSelectComic([...selectedComics, comic]);
            } else {
                let newArray = selectedComics.filter((item) => item !== comic);
                onSelectComic(newArray);
            }

        }
    }

    const verifySelected = (comic) => {
        let isSelected = false;

        if (selectedComics && selectedComics.includes(comic)) {
            isSelected = true;
        }

        return isSelected;
    }

    return (
        <ul className="comicList">
            {
                comics.length > 0 ? (
                    comics.map((comic, index) => (
                        <Comic
                            key={index}
                            comic={comic}
                            onSelect={handleSelect}
                            isSelected={verifySelected(comic)}
                        />
                    ))
                ) : <div className="loading"><p>Loading Comics...</p></div>
            }
        </ul>
    )
}

export default ComicList;