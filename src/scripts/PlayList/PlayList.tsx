import React from "react";
import {Button} from "react-bootstrap";
import PlayListItem from "./PlayListItem";
import ISong from "../ISong";
import IPlaylist from "./IPlaylist";
export default class PlayList extends React.Component<{playlist: IPlaylist}>{
    render() {
        const {playlist} = this.props;
        console.log("playlist", playlist);
        const items = (playlist) && (playlist).map((song :ISong, i: number)=>{return <PlayListItem song={song} key={i} Votable={true}/>});
        return (
            <>
                {items}
            </>
        );
    }
}