import React from "react";
import ILobby from "../ILobby";
import Host from "./Host";
import IPlaylist from "../PlayList/IPlaylist";
import IPlayerControls from "../Player/IPlayerControls";

export default class Client extends React.Component<{lobby:ILobby; playlist: IPlaylist; song: any} & IPlayerControls>{
    render() {
        console.log("redirect client");
        return (
            <Host {...this.props}/>
        );
    }
}