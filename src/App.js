import './App.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

import Header from './components/Header/Header.component';
import ComicList from './components/ComicList/ComicList.component';
import Button from './components/Button/Button.component';
import Modal from './components/Modal/Modal.component';
import Mailer from './components/Mailer/Mailer.component';
import Footer from './components/Footer/Footer.component';

function App() {

  const [getState, setState] = useState({
    comics: [],
    filteredComics: null,
    selectedComics: [],
    showingModal: false,
    modalContent: null,
    showMailer: false
  });
  const { comics, filteredComics, selectedComics, showingModal, modalContent, showMailer } = getState;

  useEffect(() => {
    console.log("Run");
    const timeStamp = toString(new Date());
    const privateKey = process.env.REACT_APP_PRIVATE_KEY;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    const hash = md5(timeStamp + privateKey + publicKey);

    axios.get('http://gateway.marvel.com/v1/public/comics', {
      params: {
        'apikey': publicKey,
        'limit': 100,
        'hash': hash,
        'ts': timeStamp
      },
      responseType: 'json'
    }).then((response) => {

      const results = response.data.data.results.reverse();
      setState({ comics: results, filteredComics: results });

    })
  }, [])

  const onFilterComic = (data) => {
    setState({ ...getState, filteredComics: data });
  }

  const onSelectComic = (data) => {
    setState({ ...getState, selectedComics: data });
  }

  const onToggleModal = (data) => {
    setState({ ...getState, showingModal: !showingModal, modalContent: data });
  }

  const allowEmailShare = () => {
    return selectedComics === undefined || selectedComics.length === 0 ? false : true;
  }

  const onToggleMailer = () => {
    setState({ ...getState, showMailer: !showMailer });
  }

  return (
    <div className={showingModal || showMailer ? 'App blockScroll' : 'App'} >
      <Header handleFilter={onFilterComic} comics={comics} />

      <div className="container">
        <ComicList
          comics={filteredComics}
          onSelectComic={onSelectComic}
          selectedComics={selectedComics}
          toggleModal={onToggleModal}
        />

        <Button name="Share Selected" show={allowEmailShare()} onClick={onToggleMailer} />
      </div>

      <Modal show={showingModal} content={modalContent} onToggle={onToggleModal} />
      <Mailer show={showMailer} selectedComics={selectedComics} onToggle={onToggleMailer} />
      <Footer />
    </div>
  );
}

export default App;
