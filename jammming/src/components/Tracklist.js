import {Track} from './Track';

class Tracklist{
    constructor(){
        this.tracklist = [Track];
    }
    getTracklist(){
        return this.tracklist;
    }
    setTracklist(tracklist){
        this.tracklist = tracklist;
    }
    addTrack(track){
        this.tracklist.push(track);
    }
}

export default {Tracklist};