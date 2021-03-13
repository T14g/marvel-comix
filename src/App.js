import './App.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

import Header from './components/Header/Header.component';
import ComicList from './components/ComicList/ComicList.component';

function App() {

  const [getState, setState] = useState({ comics: [], filteredComics: [], selectedComics: [] });
  const { comics, filteredComics, selectedComics } = getState;

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

      const results = response.data.data.results;
      setState({ comics: results, filteredComics: results });

    })
  }, [])

  const onFilterComic = (data) => {
    setState({ ...getState, filteredComics: data });
  }

  const onSelectComic = (data) => {
    setState({ ...getState, selectedComics: data });
  }

  return (
    <div className="App">
      <Header handleFilter={onFilterComic} comics={comics} />
      <ComicList comics={filteredComics} onSelectComic={onSelectComic} selectedComics={selectedComics} />
    </div>
  );
}

export default App;
