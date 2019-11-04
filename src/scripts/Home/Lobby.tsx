import React from "react";
import Api from "../Api";
import Client from "./Client";
import Host from "./Host";
import ILobby from "../ILobby";

export default class Lobby extends React.Component {
    constructor(props: any) {
        super(props);
        console.log("lobby",props);
        const hash = props.match.params.hash;
        Api.lobby(hash).get().then(j => this.setState({lobby: j.data.lobby}))
    }

    state = {lobby: undefined};

    render() {
        const lobby : ILobby | undefined = this.state.lobby;
        const isOwner = lobby && (lobby as any).isOwner;
        return (lobby) ? (isOwner) ? (<Host lobby={lobby}/>) : (<Client lobby={lobby}/>)
            : (<h4>Lobby loading</h4>);
    }
}
