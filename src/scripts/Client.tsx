import React from "react";
import ILobby from "./ILobby";
import Host from "./Host";

export default class Client extends React.Component<ILobby>{
    render() {
        console.log("render(client)");
        return (
            <Host {...this.props}/>
        );
    }
}