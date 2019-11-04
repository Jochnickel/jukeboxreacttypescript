import React from "react";
import Alert from "react-bootstrap/Alert";
import LinkButton from "../LinkButton";
import store from "../Store";

export default class Home extends React.Component {
    constructor(props: any) {
        super(props);
        store.on("change",()=>{
            this.setState({lobby: store.getCurrentLobby()})
        })
    }
    state = {lobby: store.getCurrentLobby()};

    render() {
        const primaryButton = (this.state.lobby)
            ? <LinkButton to={"/lobby/" + this.state.lobby.hash} block>Back to lobby</LinkButton>
            : <LinkButton to={"hostdialog"} variant="primary" block>Host</LinkButton>;

        return (<>
            <Alert variant="info">Host or Join a playlist!</Alert>
            {primaryButton}
            <LinkButton to={"joindialog"} variant="secondary" block>Join</LinkButton>
        </>);
    }
}