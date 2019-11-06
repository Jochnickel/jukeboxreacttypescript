import React from "react";
import {Toast} from "react-bootstrap";
import {QRCode} from "react-qr-svg";

export default class QRToast extends React.Component<{ value: string; show: boolean; handleClose: () => any; }> {
    componentDidMount(): void {
        document.addEventListener("keydown", this.handleKey);
    }

    componentWillUnmount(): void {
        document.removeEventListener("keydown", this.handleKey);
    }

    private handleKey = (event: KeyboardEvent) =>
        (event.key === "Escape") && this.props.handleClose();


    render() {
        return (<Toast style={{position: 'absolute', bottom: '0', right: '0'}} show={this.props.show}
                       onClose={this.props.handleClose}>
            <Toast.Header/>
            <Toast.Body><QRCode value={this.props.value}/></Toast.Body>
        </Toast>);
    }
}

