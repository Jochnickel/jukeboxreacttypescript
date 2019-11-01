import React from "react";
import {Button, Form} from "react-bootstrap";
import {withRouter, RouteComponentProps} from "react-router-dom";

class HostDialog extends React.Component<RouteComponentProps> {
    catchSubmit(event: any) {
        event.preventDefault();
        const formData = JSON.stringify(new FormData(event.currentTarget));


    }

    render() {
        return (
            <>
                <Form autoComplete="on" action="http://yt-party.com/api/lobby" onSubmit={this.catchSubmit.bind(this)}
                      method="post">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Lobby name</Form.Label>
                        <Form.Control name="name" placeholder="Enter some name"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="pass" type="password" placeholder="Password" defaultValue={"asd"}/>
                        <Form.Control className={"d-none"} name="user_id" placeholder="Password"
                                      defaultValue={12345678901234567}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onSubmit={this.catchSubmit} block>
                        Submit
                    </Button>
                </Form>
            </>
        );
    }
}

export default withRouter(HostDialog);