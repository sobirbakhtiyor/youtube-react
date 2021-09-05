import axios from 'axios';

// const KEY = 'AIzaSyBznge0hEItYnHcz99zWjzIdn00RMoxYmU'
const KEY = 'AIzaSyDU3U3rGMqXAppKj39eM33Bn_3WznyOQgo'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  } 
});