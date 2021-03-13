import './App.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

import Header from './components/Header/Header.component';
import ComicList from './components/ComicList/ComicList.component';

function App() {

  const [getState, setState] = useState({ comics: [], filtered: [] });
  const { comics, filtered } = getState;

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
      setState({ comics: results, filtered: results });

    })
  }, [])

  const handleFilter = (value) => {
    const filteredComics = comics.filter((comic) => (comic.title.toLowerCase()).includes(value.toLowerCase()));
    console.log(filteredComics);
    setState({ ...getState, filtered: filteredComics });
  }

  return (
    <div className="App">
      <Header handleFilter={handleFilter} />
      <ComicList comics={filtered} />
    </div>
  );
}

export default App;
