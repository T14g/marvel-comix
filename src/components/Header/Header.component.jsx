import React from 'react';
import './Header.styles.scss';
import Filter from '../Filter/Filter.component';


const Header = ({handleFilter}) => {

    return(
        <div className="header">
            <Filter callBack={handleFilter} />
        </div>
    )
}

export default Header;