import React, {useState} from 'react';
import '../App.css';
import Playlist  from './Playlist';

function App() {
  const [playlistName, setPlaylistName] = useState();

  const displayPlaylist = (e) => {
    Playlist.render();
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <Playlist></Playlist>
      <div className="Save-To-Spotify">
        <button>Save to Spotify</button>
      </div>
      <div className="Search">
        <button>Search</button>
      </div>
      </header>
    </div>
  );
}

export default App;
