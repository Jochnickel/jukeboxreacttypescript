import React from "react";
import API from "./API";
import ILobby from "./ILobby";
import PlayListItem from "./PlayList/PlayListItem";

export default class PlayList extends React.Component<ILobby> {
    state = {
        items: []
    };

    constructor(props: any) {
        super(props);
        API.get("http://yt-party.com/api/lobby/" + this.props.hash + "/playlist", d => {
            console.log("getLobby",d);
            const arr = [];
            for (let i = 0; i < d.playlist.length; i++) {
                arr[i] = <PlayListItem key={i} Votable={true}/>;
                console.log(d.playlist[i]);
            }
            this.setState({items: arr});
        });
    }


    render() {
        return (
            <>
                {this.state.items}
            </>
        );
    }
}