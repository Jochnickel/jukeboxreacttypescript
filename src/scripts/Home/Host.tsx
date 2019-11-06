import React from "react";
import ILobby from "../ILobby";
import SmartPlayer from "../Player/SmartPlayer";
import PlayList from "../PlayList/PlayList";
import IPlaylist from "../PlayList/IPlaylist";
import IPlayerControls from "../Player/IPlayerControls";
import SearchField from "../PlayList/SearchField";

interface iProps{ lobby: ILobby; playlist: IPlaylist; song: any}

export default class Host extends React.Component<iProps & IPlayerControls> {
    render() {
        return (
            <>
                <SmartPlayer autoplay={true} {...this.props}/>
                <SearchField {...this.props}/>
                <PlayList {...this.props}/>
            </>
        );
    }
}

