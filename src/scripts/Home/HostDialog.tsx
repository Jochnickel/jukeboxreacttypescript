import React from "react";
import {Button, Form} from "react-bootstrap";

export default class HostDialog extends React.Component {
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
            <>
                <Form autoComplete="on" action="http://yt-party.com/api/lobby" target="asd" method="post">
                    <iframe name="asd" style={{background: "lavender"}}></iframe>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Lobby name</Form.Label>
                        <Form.Control name="name" placeholder="Enter some name"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="pass" type="password" placeholder="Password" defaultValue={"asd"}/>
                        <Form.Control name="user_id" placeholder="Password" defaultValue={12345678901234567}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onSubmit={this.catchSubmit} block>
                        Submit
                    </Button>
                </Form>
            </>
        );
    }
}