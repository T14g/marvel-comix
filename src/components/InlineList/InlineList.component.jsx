import React from 'react';
import './InlineList.styles.scss';


const InlineList = ({ title, list }) => {
    
    const renderHelper = () => {
        if (list.length > 0) {
            return (
                <ul className="inlineList">
                    {
                        list.map((item, index) => (
                            <li key={index}>{item.name} | </li>
                        ))
                    }
                </ul>
            )
        } else {
            return <p className="errorMsg">Not available</p>
        }
    }

    return (
        <>
            <h3 className="listTitle">{title}</h3>
            { renderHelper() }
        </>
    )
}

export default InlineList;