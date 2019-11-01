import React from "react";
// @ts-ignore
import Api from "./Api";
import Client from "./Client";
import Host from "./Host";

export default class Lobby extends React.Component {
    constructor(props: any) {
        super(props);
        const hash = props.match.params.hash;
        Api.lobby(hash).get().then(r => r.json()).then(j => this.setState({lobby: j.data.lobby}))
    }

    state = {lobby: undefined};

    render() {
        const {lobby} = this.state;
        const isOwner = lobby && (lobby as any).isOwner;
        return (lobby) ? (isOwner) ? (<Host lobby={lobby!}/>) : (<Client lobby={lobby!}/>)
            : (<h4>Lobby loading</h4>);
    }
}
