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
        Api.lobby(props.match.params.hash).playlist.get().then(this.setSongs).catch(r => this.props.history.push("/error"));
    }

    state = {lobby: undefined, playlist: [], currentSong:undefined};

    private setSongs = (p: any)=>{
        this.setState({playlist: p.data.playlist || []});
        this.setState({currentSong : this.state.playlist[0]});
    };

    controls = {
        addSong: (url: string) => {
            return Api.YT.urlToSong(url).then(d=>{
                Api.lobby(this.props.match.params.hash).song.post({url:url,title:d.title}).then(this.setSongs);
            });
        },
        removeSong: (song: ISong) => {
            Api.lobby(this.props.match.params.hash).song(song.id).delete().then(this.setSongs);
        },
        voteSong: (song: ISong, up: boolean) => {
            Api.lobby(this.props.match.params.hash).song(song.id).vote(up ? "up" : "down").post().then(p=>this.setState({playlist: p.data.playlist || []}));
        }
    };

    render() {
        console.log("lobby pl", this.state.playlist);
        const lobby: ILobby | undefined = this.state.lobby;
        const props = {...this.props,...this.state,...this.controls};
        return (lobby)
            ? (lobby!.owns_lobby === "1")
                ? (<Host {...props} lobby={lobby} song={this.state.currentSong}/>)
                : (<Client {...props} lobby={lobby} song={this.state.currentSong}/>)
            : (<h4>Lobby loading</h4>);
    }
}
