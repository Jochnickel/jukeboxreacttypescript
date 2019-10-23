import React from "react";
import {Button, Form, FormControl} from "react-bootstrap";

export default class SearchField extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Form inline>
                <FormControl type="text" placeholder="Search" />
                <Button variant="outline-success">Search</Button>
            </Form>
        );
    }
}