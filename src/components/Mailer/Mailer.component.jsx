import React from 'react';
import './Mailer.styles.scss';

import ComicImage from '../ComicImage/ComicImage.component';
import Button from '../Button/Button.component';
import CloseButton from '../CloseButton/CloseButton.component';
import InlineList from '../InlineList/InlineList.component';
import ComicDescription from '../ComicDescription/ComicDescription.component';

const Mailer = ({ show, selectedComics, onToggle }) => {

    const renderHelper = () => {

        if (show) {
            return (
                <div className="mailerBG">
                    <div className="innerContainer">
                        <h2 className="titleContainer">Send comics via email</h2>
                        <CloseButton onClick={() => onToggle()} />

                        <label htmlFor="email" className="emailLabel">Send to:</label>
                        <input type="email" name="email" id="email" className="emailInput" />

                        <table className="comicsTable">
                            <thead>
                                <tr>
                                    <th className="imageColumn">Image</th>
                                    <th className="titleColumn">Title</th>
                                    <th className="descriptionColumn">Details</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    selectedComics && selectedComics.length > 0 ? (
                                        selectedComics.map((comic, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <ComicImage comic={comic} size="medium" />
                                                </td>
                                                <td>{comic.title}</td>
                                                <td>
                                                    <InlineList title="Creators" list={comic.creators.items} />
                                                    <InlineList title="Characters" list={comic.characters.items} />
                                                    <ComicDescription description={comic.description} />
                                                </td>
                                            </tr>
                                        ))
                                    ) : null
                                }
                            </tbody>
                        </table>

                        <Button name="Send" show={true} onClick={() => console.log("Sending comics via email....")} />
                    </div>
                </div>
            )
        } else {
            return null;
        }
    }

    return renderHelper()
}

export default Mailer;