import React from "react";
import Alert from "react-bootstrap/Alert";
import LinkButton from "./LinkButton";

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
            <LinkButton to={"hostdialog"} variant="primary" block>Host</LinkButton>
            <LinkButton to={"joindialog"} variant="secondary" block>Join</LinkButton>
        </>);
    }
}