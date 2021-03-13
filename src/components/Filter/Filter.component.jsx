import React from 'react';
import './Filter.styles.scss';

const Filter = ({ callBack }) => {

    const onFilter = (e) => {
        callBack(e.target.value);
    }

    return (
        <input type="text" className="FilterInput" onChange={onFilter} />
    )
}

export default Filter;