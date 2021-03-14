import React from 'react';
import './ComicList.styles.scss';

import Comic from '../Comic/Comic.component';


const ComicList = ({ comics, selectedComics, onSelectComic, toggleModal }) => {

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
                comics !== null && comics.length > 0 ? (
                    comics.map((comic, index) => (
                        <Comic
                            key={index}
                            comic={comic}
                            onSelect={handleSelect}
                            isSelected={verifySelected(comic)}
                            onToggleModal={toggleModal}
                        />
                    ))
                ) : comics !==null && comics.length === 0 ?
                    <div className="loading nope"><p>No Comics found.</p></div>
                    : <div className="loading"><p>Loading Comics...</p></div>
            }
        </ul>
    )
}

export default ComicList;