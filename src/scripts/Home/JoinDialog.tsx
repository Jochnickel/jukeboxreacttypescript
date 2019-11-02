import React from "react";
import {Alert, Form} from "react-bootstrap";
import Api from "../Api";
import store from "../Store";
import {RouteComponentProps} from "react-router";

export default class JoinDialog extends React.Component<RouteComponentProps> {
    catchSubmit(event: any){
        event.preventDefault();
        Api.lobby(event.target.lobbyname.value).get().then(r=>this.props.history.push("/lobby/"+r.data.lobby.hash));
    }
    render() {
        return (<>
            <Form autoComplete="on" onSubmit={this.catchSubmit.bind(this)}>
                <Form.Group controlId="formSearchLobby">
                    <Form.Label>Lobbyname or hashcode</Form.Label>
                    <Form.Control name="lobbyname" placeholder="Enter some name"/>
                </Form.Group>
            </Form>
        </>);
    }
}