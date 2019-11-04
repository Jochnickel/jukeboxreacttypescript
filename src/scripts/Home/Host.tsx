import React from "react";
import ILobby from "../ILobby";
import Api from "../Api";
import SmartPlayer from "../Player/SmartPlayer";
import PlayList from "../PlayList/PlayList";
import {Button} from "react-bootstrap";
import ISong from "../ISong";
import store from "../Store";

export default class Host extends React.Component<{ lobby: ILobby }> {
    constructor(props: any) {
        super(props);
        Api.lobby(props.lobby.hash).playlist.get().then(d => this.setState({playlist: d.data.playlist}));
    }

    state = {playlist: []};

    render() {
        const {playlist} = this.state;
        console.log("asda host", playlist)
        const song1: ISong | undefined = (playlist) && this.state.playlist[0];
        const playerURL = song1 && song1!.url;

        return (
            <div>
                <SmartPlayer player={SmartPlayer.YOUTUBE} url={playerURL} onEnd={() => {
                }}/>
                <Button variant={"info"} onClick={() =>
                    Api.lobby(this.props.lobby.hash).song
                        .post({url: "https://www.youtube.com/watch?v=feA64wXhbjo", title: "Gaben"})
                        .then(r => {
                            console.log(r);
                            this.setState({playlist: r.data.playlist})
                        })
                }>Add Song</Button>
                <PlayList playlist={playlist}/>
            </div>
        );
    }
}