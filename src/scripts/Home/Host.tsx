import React from "react";
import ILobby from "../ILobby";
import SmartPlayer from "../Player/SmartPlayer";
import PlayList from "../PlayList/PlayList";
import {Button} from "react-bootstrap";
import IPlaylist from "../PlayList/IPlaylist";
import IPlayerControls from "../Player/IPlayerControls";
import ISong from "../ISong";

interface iProps{ lobby: ILobby; playlist: IPlaylist; song: any}

export default class Host extends React.Component<iProps & IPlayerControls> {
    render() {
        return (
            <div>
                <SmartPlayer song={this.props.playlist[0]} autoplay={true} {...this.props}/>
                <Button variant={"info"} onClick={this.props.addSong}>Add Song</Button>
                <PlayList {...this.props}/>
            </div>
        );
    }
}

