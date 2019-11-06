import React from "react";
import ILobby from "../ILobby";
import IPlaylist from "../PlayList/IPlaylist";
import ILobbyControls from "../Player/ILobbyControls";
import PlayList from "../PlayList/PlayList";
import SearchField from "../PlayList/SearchField";

export default class Client extends React.Component<{ lobby: ILobby; imgLib: any; playlist: IPlaylist; song: any } & ILobbyControls> {

    render() {
        return (<>
                <h1>{this.props.lobby.name}</h1>
                <SearchField {...this.props}/>
                <PlayList indicateFirst={true} {...this.props}/>
            </>
        );
    }
}