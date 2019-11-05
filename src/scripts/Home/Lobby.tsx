import React from "react";
import Api from "../Api";
import Client from "./Client";
import Host from "./Host";
import ILobby from "../ILobby";
import {RouteComponentProps} from "react-router";
import ISong from "../ISong";

interface iProps extends RouteComponentProps<{ hash: string }> {
}

export default class Lobby extends React.Component<iProps> {
    constructor(props: iProps) {
        super(props);
        console.log("lobby", props);
        Api.lobby(props.match.params.hash).get().then(r => this.setState({lobby: r.data.lobby})).catch(r => this.props.history.push("/error"));
        Api.lobby(props.match.params.hash).playlist.get().then(r => this.setState({playlist: r.data.playlist || []})).catch(r => this.props.history.push("/error"));
    }

    state = {lobby: undefined, playlist: []};

    controls = {
        addSong: () => {
            const vid = Api.YT.randomVideo();
            Api.lobby(this.props.match.params.hash).song.post(vid).then(r => this.setState({playlist: r.data.playlist}));
        },
        removeSong: (song: ISong) => {
            Api.lobby(this.props.match.params.hash).song(song.id).delete().then(r => console.log("deleted", r)); // this.setState({playlist: r.data.playlist})
        }
    };

    render() {
        console.log("lobby pl", this.state.playlist);
        const lobby: ILobby | undefined = this.state.lobby;
        return (lobby)
            ? (lobby!.owns_lobby === "1")
                ? (<Host lobby={lobby} playlist={this.state.playlist} {...this.controls}/>)
                : (<Client lobby={lobby} playlist={this.state.playlist} {...this.controls}/>)
            : (<h4>Lobby loading</h4>);
    }
}
