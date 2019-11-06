import React from "react";
import {Form} from "react-bootstrap";
import Api from "../Api";
import {RouteComponentProps} from "react-router";

export default class JoinDialog extends React.Component<RouteComponentProps> {
    handleSubmit = (event: any) => {
        event.preventDefault();
        Api.lobby(event.target.lobbyname.value).get().then(r => this.props.history.push("/lobby/" + r.data.lobby.hash));
    };

    render() {
        return (<>
            <Form autoComplete="on" onSubmit={this.handleSubmit}>
                <Form.Group controlId="formSearchLobby">
                    <Form.Label>Lobbyname or hashcode</Form.Label>
                    <Form.Control name="lobbyname" placeholder="Enter some name"/>
                </Form.Group>
            </Form>
        </>);
    }
}