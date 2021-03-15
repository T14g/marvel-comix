import axios from 'axios';
import md5 from 'md5';

const BASE_URL = 'http://gateway.marvel.com/v1/public/comics';

const fetchComics = async () => {

    const PUBLIC_K = 'f36e1b15baf00be2ff61c947e88add3d';
    const PRIV_K = 'fc1e647f7727f1e75c0ee797dd1fa793040b678b';

    const timeStamp = toString(new Date());
    const hash = md5(timeStamp + PRIV_K + PUBLIC_K);

    const results = axios.get(BASE_URL, {
        params: {
            'apikey': PUBLIC_K,
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