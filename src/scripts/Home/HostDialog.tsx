import React from "react";
import {Button, Form} from "react-bootstrap";
import {withRouter, RouteComponentProps} from "react-router-dom";
import API from "../API";

class HostDialog extends React.Component<RouteComponentProps> {
    catchSubmit(event: any) {
        const form = event.currentTarget;
        event.preventDefault();
        const formData = new FormData(form);
        // wtf
        API.post("http://yt-party.com/api/lobby",
            new FormData(form),
            d => {
                localStorage["session"] = JSON.stringify(d.lobby);
                this.props.history.push("/host");
        });

    }

    render() {
        return (
            <>
                {/*<Form autoComplete="on" action="http://yt-party.com/api/lobby" target="asd" method="post">*/}
                <Form autoComplete="on" action="http://yt-party.com/api/lobby" onSubmit={this.catchSubmit.bind(this)}
                      method="post">
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

export default withRouter(HostDialog);