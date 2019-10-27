import React from "react";
import Host from "./Host";
import {RouteComponentProps} from "react-router-dom";
import ILobby from "./ILobby";

export default class Client extends React.Component<RouteComponentProps & ILobby>{
    render() {
        const hash = (this.props.match.params as any).hash;
        console.log("render(client)",hash);
        return (
            <>
                <Host hash={hash} {...this.props}/>
            </>
        );
    }
}