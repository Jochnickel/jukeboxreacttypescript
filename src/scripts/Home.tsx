import React from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Modals from "./Modals";

export default class Home extends React.Component {
    private hostModal = {show: false};

    constructor(props: any) {
        super(props);
    }

    render() {
        return (<>
            <Modals title="a" body={<></>} buttons={[{text:"a",variant:"primary",onclick:()=>{}}]}></Modals>
            <Alert variant="info">Host or Join a playlist!</Alert>
            <Button variant="primary" block onClick={() => this.hostModal.show = true}>Host</Button>
            <Button variant="secondary" block>Join</Button>
        </>);
    }
}