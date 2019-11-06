import React from "react";
import {Button, Form} from "react-bootstrap";
import {withRouter, RouteComponentProps} from "react-router-dom";
import Api from "../Api";
import store from "../Store";

class HostDialog extends React.Component<RouteComponentProps> {
    catchSubmit(event: any) {
        event.preventDefault();
        this.setState({validated: true});
        const form = event.target;
        if (!form.checkValidity()) return;
        this.setState({pending: true});
        Api.lobby.post({name: form.name.value, pass: form.pass.value}).then(r => {
            store.setCurrentLobby(r.data.lobby);
            this.props.history.push("/lobby/" + r.data.lobby.hash);
        }).catch(() => this.setState({pending: false})); //TODO
    }

    state = {pending: false, validated: false};

    render() {
        return (
            <>
                <Form noValidate validated={this.state.validated} autoComplete="on"
                      action="http://yt-party.com/api/lobby" onSubmit={this.catchSubmit.bind(this)}
                      method="post">
                    <Form.Group>
                        <Form.Label>Lobby name</Form.Label>
                        <Form.Control name="name" placeholder="Enter some name"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control autoFocus name="pass" type="password" placeholder="Password" required/>
                        <Form.Control.Feedback type="invalid">
                            You must enter a password
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="success" disabled={this.state.pending} type="submit" block>
                        Submit
                    </Button>
                </Form>
            </>
        );
    }
}

export default withRouter(HostDialog);