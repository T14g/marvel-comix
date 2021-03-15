import React from 'react';
import './Filter.styles.scss';

const Filter = ({ callBack, comics }) => {

    const onFilter = (e) => {
        let comicName = e.target.value;
        let filtered = comics.filter((comic) => (comic.title.toLowerCase()).includes(comicName.toLowerCase()));
        callBack(filtered);
    }

    return (
        <input type="text" className="FilterInput" onChange={onFilter} placeholder="Type something to filter" />
    )
}

export default Filter;