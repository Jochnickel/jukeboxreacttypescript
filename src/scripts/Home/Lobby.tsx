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
        console.log("lobby con", props);
        if (this.props.match.params.hash) {
            Api.lobby(props.match.params.hash).get().then(r => this.setState({lobby: r.data.lobby})).catch(() => this.props.history.push("/error"));
            this.controls.loadPlaylist();
        } else {
            Api.lobby.get().then(r => {
                this.props.history.replace("lobby/" + r.data.lobby[0].hash);
                this.setState({lobby: r.data.lobby[0]});
                this.controls.loadPlaylist();
            });
        }

    }

    state = {lobby: undefined, playlist: [], currentSong: undefined, timer: undefined};

    componentDidMount = () => this.setState({timer: setInterval(this.controls.loadPlaylist, 5000)});
    componentWillUnmount = () => clearInterval(this.state.timer);

    private setSongs = (p: any) => {
        this.setState({playlist: p.data.playlist || []});
        this.setState({currentSong: this.state.playlist[0]});
    };

    controls = {
        addSong: (url: string) => {
            return Api.YT.urlToSong(url).then(d => {
                Api.lobby(this.props.match.params.hash).song.post({url: url, title: d.title}).then(this.setSongs);
            });
        },
        removeSong: (song: ISong) => {
            Api.lobby(this.props.match.params.hash).song(song.id).delete().then(this.setSongs);
        },
        voteSong: (song: ISong, up: boolean) => {
            Api.lobby(this.props.match.params.hash).song(song.id).vote(up ? "up" : "down").post().then(p => this.setState({playlist: p.data.playlist || []}));
        },
        loadPlaylist: () => {
            Api.lobby(this.props.match.params.hash).playlist.get().then(this.setSongs).catch(r => this.props.history.push("/error"));
        }
    };

    render() {
        console.log("lobby pl", this.state.playlist);
        const lobby: ILobby | undefined = this.state.lobby;
        const props = {...this.props, ...this.state, ...this.controls, song: this.state.currentSong};
        return (lobby)
            ? (lobby!.owns_lobby === "1")
                ? (<Host {...props} lobby={lobby}/>)
                : (<Client {...props} lobby={lobby}/>)
            : (<h4>Lobby loading</h4>);
    }
}
