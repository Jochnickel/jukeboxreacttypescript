import React from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Modals from "./Modals";
import HostLobbyDialog from "./HostLobbyDialog";

export default class Home extends React.Component {
    private hostModal = {show: false};

    constructor(props: any) {
        super(props);
    }

    render() {
        return (<>
            <Alert variant="info">Host or Join a playlist!</Alert>
            <Button variant="primary" block>Host</Button>
            <HostLobbyDialog/>
            <Button variant="secondary" block>Join</Button>
        </>);
    }
}