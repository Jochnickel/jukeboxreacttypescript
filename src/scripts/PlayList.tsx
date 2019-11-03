import React from "react";
import {Button} from "react-bootstrap";
import PlayListItem from "./PlayList/PlayListItem";
export default class PlayList extends React.Component<{playlist: any}>{
    render() {
        console.log("playlist",this.props.playlist);
        const items = (this.props.playlist as []).map((song, i)=>{return <PlayListItem key={i} Votable={true}/>})
        return (
            <>
                {items}
                <Button/>
            </>
        );
    }
}