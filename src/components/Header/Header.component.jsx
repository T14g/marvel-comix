import React from 'react';
import './Header.styles.scss';
import Filter from '../Filter/Filter.component';


const Header = ({ handleFilter, comics }) => {

    return (
        <div className="header">
            <Filter callBack={handleFilter} comics={comics} />
        </div>
    )
}

export default Header;