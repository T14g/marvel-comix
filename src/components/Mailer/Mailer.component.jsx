import React, { useState } from 'react';
import './Mailer.styles.scss';

import ComicImage from '../ComicImage/ComicImage.component';
import Button from '../Button/Button.component';
import CloseButton from '../CloseButton/CloseButton.component';
import InlineList from '../InlineList/InlineList.component';
import ComicDescription from '../ComicDescription/ComicDescription.component';

const Mailer = ({ show, selectedComics, onToggle }) => {

    const [getState, setState] = useState({ disabledEmail: true });
    const { disabledEmail } = getState;

    const onTypeEmail = (e) => {
        const emailTyped = e.target.value;

        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (regex.test(emailTyped.toLowerCase())) {
            setState({ disabledEmail: false })
        } else {
            setState({ disabledEmail: true })
        }

    }

    const onCloseMailer = () => {
        onToggle();
        setState({ disabledEmail: true })
    }

    const onSendEmail = () => {
        onCloseMailer();
        alert("The email has been sent! Thanks!");
    }

    const renderHelper = () => {

        if (show) {
            return (
                <div className="mailerBG">
                    <div className="innerContainer">
                        <h2 className="titleContainer">Send comics via email</h2>
                        <CloseButton onClick={() => onCloseMailer()} />

                        <label htmlFor="email" className="emailLabel">Send to:</label>
                        <input type="email" name="email" id="email" className="emailInput" onChange={onTypeEmail} />

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

                        <Button name="Send" disabled={disabledEmail} show={true} onClick={() => onSendEmail()} />
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