import { Tracklist } from './Tracklist'

class Playlist{
    constructor(){
        this.playlistName = "Untitled";
        this.tracklist = Tracklist();
    }
    constructor(name){
        this.playlistName = name;
    }
    setPlaylistName(name){
        this.playlistName = name;
    }
    getPlaylistName(){
        return this.playlistName;
    }
}