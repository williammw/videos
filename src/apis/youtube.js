import axios from 'axios';
const KEY = 'AIzaSyD9nMBJDFVIDVaeAWmu17S88tS7x0pV8ZY';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:25,
        key:KEY        
    }
});

// example
// youtube.get('/search)