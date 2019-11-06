import React from "react";
import PlayListItem from "./PlayListItem";
import ISong from "../ISong";
import ILobby from "../ILobby";
import IPlaylist from "./IPlaylist";
import ILobbyControls from "../Player/ILobbyControls";
import {ListGroup} from "react-bootstrap";

export default class PlayList extends React.Component<{ lobby: ILobby; playlist: IPlaylist; indicateFirst?: boolean } & ILobbyControls> {
    constructor(props: any) {
        super(props);
        console.log("con playlist",this.props);
    }

    render() {
        const {playlist} = this.props;
        console.log("playlist", playlist);
        const items = (playlist) && (playlist).map((song: ISong, i: number) => {
            return <PlayListItem {...this.props} song={song} key={i} indicate={this.props.indicateFirst && 0===i} votable={0!==i}/>
        });
        return (
            <ListGroup >
                {items}
            </ListGroup>
        );
    }
}