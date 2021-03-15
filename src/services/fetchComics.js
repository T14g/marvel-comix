import axios from 'axios';
import md5 from 'md5';

const BASE_URL = 'http://gateway.marvel.com/v1/public/comics';

const fetchComics = async () => {

    const timeStamp = toString(new Date());
    const privateKey = process.env.REACT_APP_PRIVATE_KEY;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;
    const hash = md5(timeStamp + privateKey + publicKey);

    const results = axios.get(BASE_URL, {
        params: {
            'apikey': publicKey,
            'limit': 100,
            'hash': hash,
            'ts': timeStamp
        },
        responseType: 'json'
    }).then((response) => {
        return response.data.data.results.reverse();
    })

    return results;
}

export default fetchComics;