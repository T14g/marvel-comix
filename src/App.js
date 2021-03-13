import './App.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

function App() {

  const [getData, setData] = useState({ comics: [], filtered: [] });
  const { comics, filtered } = getData;

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
      console.log(results);
      setData({ comics: results, filtered: results });

    })
  }, [])

  return (

    <div>
      Hello world
    </div>
  );
}

export default App;
