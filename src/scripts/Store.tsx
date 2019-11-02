import {EventEmitter} from "events";
import ILobby from "./ILobby";

class Store extends EventEmitter {
    private currentLobby: ILobby | undefined = undefined;
    public getCurrentLobby = () => this.currentLobby;
    public setCurrentLobby = (lobby: ILobby | undefined) => {
        this.currentLobby = lobby;
        this.emit("change");
    };
}

const store = new Store;
export default store;