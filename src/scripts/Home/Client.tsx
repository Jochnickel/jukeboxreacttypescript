import React from "react";
import ILobby from "../ILobby";
import Host from "./Host";

export default class Client extends React.Component<{lobby:ILobby}>{
    render() {
        return (
            <Host {...this.props}/>
        );
    }
}