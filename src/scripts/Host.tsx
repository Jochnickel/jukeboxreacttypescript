import React from "react";
import ILobby from "./ILobby";
// @ts-ignore
import Api from "./Api";

export default class Host extends React.Component<ILobby>{
    constructor(props: ILobby) {
        super(props);
        const hash = props.lobby!.hash;
        Api.lobby(hash).playlist.get().then(console.log)
    }
    state = {playlist:undefined};

    render() {
        return (
            <div>

            </div>
        );
    }
}