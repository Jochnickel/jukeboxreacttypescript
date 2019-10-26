import React from "react";
import {Alert, Form} from "react-bootstrap";

export default class JoinDialog extends React.Component {
    render() {
        return (<>
            <Form>
                <Form.Group controlId="formSearchLobby">
                    <Form.Label>Lobbyname or hashcode</Form.Label>
                    <Form.Control name="lobbyname" placeholder="Enter some name"/>
                </Form.Group>
            </Form>
        </>);
    }
}