import React from "react";
import {Button, Form} from "react-bootstrap";
import API from "./API";

export default class HostLobbyDialog extends React.Component {
    constructor(props: any) {
        super(props);

    }

    catchSubmit(event: any) {
        const form = event.currentTarget;
        event.preventDefault();
        // action="http://yt-party.com/api/lobby" method="post"
        const request = new XMLHttpRequest();
        request.open('POST', 'http://yt-party.com/api/lobbby', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.send(new FormData(form));
    }

    render() {
        return (
            <Form autoComplete="on" action="http://yt-party.com/api/lobby" target="asd" method="post">
                <iframe name="asd"></iframe>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Lobby name</Form.Label>
                    <Form.Control name="name" placeholder="Enter some name"/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="pass" type="password" placeholder="Password"/>
                    <Form.Control name="user_id" placeholder="Password"/>
                </Form.Group>
                <Button variant="primary" type="submit" onSubmit={this.catchSubmit}>
                    Submit
                </Button>
            </Form>
        );
    }
}