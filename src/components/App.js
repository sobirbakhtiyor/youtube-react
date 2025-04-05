import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [ selectedVideo, setSelectedVideo] = useState(null)
  const [videos, search] = useVideos('nature')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])


  return (
    <div className="ui container">
     Site under construction ...
    </div>
  )
}

export default App
