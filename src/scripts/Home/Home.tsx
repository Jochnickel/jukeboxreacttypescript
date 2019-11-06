import React from "react";
import Alert from "react-bootstrap/Alert";
import store from "../Store";
import {Button} from "react-bootstrap";
import {RouteComponentProps} from "react-router";

export default class Home extends React.Component<RouteComponentProps> {
    constructor(props: any) {
        super(props);
        store.on("change",()=>{
            this.setState({lobby: store.getCurrentLobby()})
        })
    }
    state = {lobby: store.getCurrentLobby()};

    render() {
        const primaryButton = (this.state.lobby)
            ? <Button onClick={()=>this.props.history.push("lobby")} block>Back to lobby</Button>
            : <Button onClick={()=>this.props.history.push("hostdialog")} variant="primary" block>Host</Button>;

        return (<>
            <Alert variant="info">Host or Join a playlist!</Alert>
            {primaryButton}
            <Button onClick={()=>this.props.history.push("joindialog")} variant="secondary" block>Join</Button>
        </>);
    }
}