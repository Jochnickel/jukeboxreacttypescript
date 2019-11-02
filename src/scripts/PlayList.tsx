import React from "react";
import {Button} from "react-bootstrap";
export default class PlayList extends React.Component<{playlist: any}>{
    render() {
        console.log("playlist",this.props.playlist);
        //const asd = (this.props.playlist as []).map(songs = > song.url);
        return (
            <>
                {"asd"}
                <Button/>
            </>
        );
    }
}