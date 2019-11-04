import {EventEmitter} from "events";
import ILobby from "./ILobby";
import ISong from "./ISong";

class Store extends EventEmitter {
    private currentLobby: ILobby | undefined = undefined;
    public getCurrentLobby = () :ILobby | undefined => this.currentLobby;
    public setCurrentLobby = (lobby: ILobby | undefined) => {
        this.currentLobby = lobby;
        this.emit("change");
    };
    public voteSong = (song: ISong, good: boolean) => {
        this.emit("vote",{song, good});
    }
}

const store = new Store;
export default store;