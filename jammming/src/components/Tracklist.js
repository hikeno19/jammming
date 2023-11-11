import {Track} from './Track';

export default class Tracklist{
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
