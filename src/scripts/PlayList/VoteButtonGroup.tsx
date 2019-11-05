import React from "react";
import {ButtonGroup} from "react-bootstrap";
import VoteButton from "./VoteButton";
import ISong from "../ISong";
import store from "../Store";
import Api from "../Api";

export default class VoteButtonGroup extends React.Component<{ song: ISong }> {
    voteUp = () => this.vote(true);
    voteDown = () => this.vote(false);

    vote(up: boolean) {
        const lobby = store.getCurrentLobby();
        const hash = lobby && lobby.hash;
        if (hash) {
            Api.lobby(hash).song(this.props.song.id).vote(up ? "up" : "down").post().then(r => console.log("voteee", r));
        } else {
            console.error("no lobbyhash")
        }
    }

    render() {
        return (
            <ButtonGroup vertical>
                <VoteButton onClick={this.voteUp} voted={this.props.song.voted_for === "UP"}
                            plus={true}>{this.props.song.vote_up}</VoteButton>
                <VoteButton onClick={this.voteDown} voted={this.props.song.voted_for === "DOWN"}
                            plus={false}>{this.props.song.vote_down}</VoteButton>
            </ButtonGroup>
        );
    }
}