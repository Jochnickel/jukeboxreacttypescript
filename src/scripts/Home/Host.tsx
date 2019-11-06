import React from "react";
import ILobby from "../ILobby";
import SmartPlayer from "../Player/SmartPlayer";
import PlayList from "../PlayList/PlayList";
import IPlaylist from "../PlayList/IPlaylist";
import ILobbyControls from "../Player/ILobbyControls";
import SearchField from "../PlayList/SearchField";

interface iProps{ lobby: ILobby; playlist: IPlaylist; imgLib: any; song: any}

export default class Host extends React.Component<iProps & ILobbyControls> {
    render() {
        return (
            <>
                <h1>{this.props.lobby.name}</h1>
                <SmartPlayer autoplay={true} {...this.props}/>
                <SearchField {...this.props}/>
                <PlayList indicateFirst={true} {...this.props}/>
            </>
        );
    }
}

