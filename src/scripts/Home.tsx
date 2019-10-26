import React from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import HostLobbyDialog from "./HostLobbyDialog";

interface props {
    app: any;
}

export default class Home extends React.Component<props> {
    private hostModal = {show: false};

    constructor(props: any) {
        super(props);
    }



    render() {
        return (<>
            <Alert variant="info">Host or Join a playlist!</Alert>
            <Button variant="primary" block onClick={()=>{}}>Host</Button>
            <HostLobbyDialog/>
            <Button variant="secondary" block>Join</Button>
        </>);
    }
}