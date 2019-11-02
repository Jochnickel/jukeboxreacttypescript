import React from "react";
import {Button, Form} from "react-bootstrap";
import {withRouter, RouteComponentProps} from "react-router-dom";
import Api from "../Api";
import store from "../Store";

class HostDialog extends React.Component<RouteComponentProps> {
    catchSubmit(event: any) {
        event.preventDefault();
        this.setState({pending:true});
        const form = event.target;
        Api.lobby.post({name:form.name.value, pass:form.pass.value}).then(r=> {
            store.setCurrentLobby(r.data.lobby);
            this.props.history.push("/lobby/"+r.data.lobby.hash);
        }).catch(e=>this.setState({pending:false})); //TODO
    }
    state = {pending:false};

    render() {
        return (
            <>
                <Form autoComplete="on" action="http://yt-party.com/api/lobby" onSubmit={this.catchSubmit.bind(this)}
                      method="post">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Lobby name</Form.Label>
                        <Form.Control name="name" placeholder="Enter some name"/>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="pass" type="password" placeholder="Password" defaultValue={"asd"}/>
                        <Form.Control className={"d-none"} name="user_id" placeholder="Password"
                                      defaultValue={12345678901234567}/>
                    </Form.Group>
                    <Button variant="primary" disabled={this.state.pending} type="submit" block>
                        Submit
                    </Button>
                </Form>
            </>
        );
    }
}

export default withRouter(HostDialog);