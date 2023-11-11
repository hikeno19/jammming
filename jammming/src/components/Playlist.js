import Tracklist from '../components/Tracklist'
import React, {useState} from 'react';

function Playlist(){
    const tracklist = Tracklist.constructor();
    const [playlistName, setPlaylistName] = useState();

    const changePlaylistName = (e) => {
        setPlaylistName(e.target.value);
    }

    const handleDisplay = () => {
        let output;
        for(const track in tracklist.getTracklist()){
            output += (
                <h3>{track.name} by {track.artist}</h3>
            );
        }
        return output;
    }

    return (
        <div 
            className="Playlist" 
            id="playlist"
        >
            <h2>Playlist: {playlistName}</h2>
            {handleDisplay}
        </div>
    );
}

export default Playlist;