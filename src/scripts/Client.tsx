import React from "react";
import Host from "./Host";
import {RouteComponentProps} from "react-router-dom";
import ILobby from "./ILobby";

export default class Client extends React.Component<RouteComponentProps & ILobby>{
    render() {
        return (
            <>
                <Host hash={(this.props.match.params as any).hash} {...this.props}/>
            </>
        );
    }
}