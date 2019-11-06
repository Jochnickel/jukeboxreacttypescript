import React from "react";
import ILobby from "../ILobby";
import IPlaylist from "../PlayList/IPlaylist";
import IPlayerControls from "../Player/IPlayerControls";
import PlayList from "../PlayList/PlayList";
import SearchField from "../PlayList/SearchField";

export default class Client extends React.Component<{ lobby: ILobby; playlist: IPlaylist; song: any } & IPlayerControls> {
    render() {
        return (<>
                <SearchField {...this.props}/>
                <PlayList {...this.props}/>
            </>
        );
    }
}