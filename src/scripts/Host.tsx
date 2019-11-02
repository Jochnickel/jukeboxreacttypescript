import React from "react";
import ILobby from "./ILobby";
import Api from "./Api";
import SmartPlayer from "./SmartPlayer";
import PlayList from "./PlayList";

export default class Host extends React.Component<{lobby:ILobby}>{
    constructor(props: any) {
        super(props);
        console.log("Host",props);
        const hash = props.lobby.hash;
        Api.lobby(hash).playlist.get().then(d=>this.setState({playlist:d.data.playlist}));
    }
    state = {playlist:null};

    render() {
        return (
            <div>
                <SmartPlayer player={SmartPlayer.YOUTUBE} url={""} onEnd={()=>{}}/>
                <PlayList hash={this.props.lobby.hash}/>
            </div>
        );
    }
}