import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default class Modals extends React.Component {
    state = {
        show: false,
        buttons: [<></>]
    };
    props = {
        title: undefined,
        body: undefined,
        buttons: [{
            text: "OK",
            variant: "primary",
            onclick: undefined
        }]

    };

    private handleClose(){
        this.state.show = false;
    }

    constructor(props: any) {
        super(props);
        this.state.show = props.show;
        props.buttons.forEach((btn: any) => {
            this.state.buttons.push(<Button variant={btn.variant} onClick={btn.onclick || this.handleClose}>{btn.text}</Button>)
        })
    }

    buttons(){
        return(
            <Button>asd</Button>
        );
    }

    render() {
        return (
            <Modal show={this.state.show}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.props.body}
                </Modal.Body>
                <Modal.Footer>
                    {this.buttons}
                </Modal.Footer>
            </Modal>
        );
    }
}