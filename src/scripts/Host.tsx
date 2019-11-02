import React from "react";
import ILobby from "./ILobby";
import Api from "./Api";
import SmartPlayer from "./SmartPlayer";
import PlayList from "./PlayList";
import {Button} from "react-bootstrap";

export default class Host extends React.Component<{ lobby: ILobby }> {
    constructor(props: any) {
        super(props);
        console.log("Host", props);
        const hash = props.lobby.hash;
        Api.lobby(hash).playlist.get().then(d => this.setState({playlist: d.data.playlist}));
    }

    state = {playlist: undefined};

    render() {
        return (
            <div>
                <SmartPlayer player={SmartPlayer.YOUTUBE} url={""} onEnd={() => {
                }}/>
                <Button variant={"info"} onClick={() =>
                    Api.lobby(this.props.lobby.hash).song
                        .post({url: "https://www.youtube.com/watch?v=feA64wXhbjo", title: "Gaben"})
                        .then(r=>this.setState(r.data.playlist))
                }>Add Song</Button>
                <PlayList playlist={this.state.playlist}/>
            </div>
        );
    }
}