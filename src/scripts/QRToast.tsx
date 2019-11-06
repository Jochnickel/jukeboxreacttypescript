import React from "react";
import {Toast} from "react-bootstrap";
import {QRCode} from "react-qr-svg";
import ClipboardJS from "clipboard";
import DeadLink from "./DeadLink";

export default class QRToast extends React.Component<{ value: string; show: boolean; handleClose: () => any; }> {
    private cb: ClipboardJS| undefined;
    componentDidMount(): void {
        document.addEventListener("keydown", this.handleKey);
        this.cb = new ClipboardJS("svg");
    }

    componentWillUnmount(): void {
        document.removeEventListener("keydown", this.handleKey);
        this.cb!.destroy();
    }

    private handleKey = (event: KeyboardEvent) =>
        (event.key === "Escape") && this.props.handleClose();

    state= {clicked: false};

    render() {
        const {show} = this.props;
        const val = this.props.value;
        return (<Toast style={{position: 'absolute', bottom: '0', right: '0', display: (show) ? "" : "none"}}
                       show={show}
                       onClose={this.props.handleClose}>
            <Toast.Header><strong style={{color:"green"}} className="mr-auto">{this.state.clicked  && "Link Copied"}</strong></Toast.Header>
            <Toast.Body ><DeadLink onClick={()=>this.setState({clicked:true})}><QRCode data-clipboard-text={val} value={val}/></DeadLink></Toast.Body>
        </Toast>);
    }
}

