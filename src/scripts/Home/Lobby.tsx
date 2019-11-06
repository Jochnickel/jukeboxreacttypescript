import React from "react";
import Api from "../Api";
import Client from "./Client";
import Host from "./Host";
import ILobby from "../ILobby";
import {RouteComponentProps} from "react-router";
import ISong from "../ISong";
import IPlaylist from "../PlayList/IPlaylist";

interface iProps extends RouteComponentProps<{ hash: string }> {
}

export default class Lobby extends React.Component<iProps> {
    constructor(props: iProps) {
        super(props);
        console.log("lobby", props);
        Api.lobby(props.match.params.hash).get().then(r => this.setState({lobby: r.data.lobby})).catch(r => this.props.history.push("/error"));
        Api.lobby(props.match.params.hash).playlist.get().then(this.setPlaylist).then(()=>this.setState({currentSong:this.state.playlist[0]})).catch(r => this.props.history.push("/error"));
    }

    state = {lobby: undefined, playlist: [], currentSong:undefined};

    private setPlaylist = (p: any)=>{
        this.setState({playlist: p.data.playlist || []})
    };

    controls = {
        addSong: () => {
            const vid = Api.YT.randomVideo();
            Api.lobby(this.props.match.params.hash).song.post(vid).then(this.setPlaylist);
        },
        removeSong: (song: ISong) => {
            Api.lobby(this.props.match.params.hash).song(song.id).delete().then(this.setPlaylist).then(this.state.currentSong = this.state.playlist[0]);
        },
        voteSong: (song: ISong, up: boolean) => {
            Api.lobby(this.props.match.params.hash).song(song.id).vote(up ? "up" : "down").post().then(this.setPlaylist);
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
