import React from "react";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

interface iProps {
    to: any;
    replace?: boolean;
}

export default class NavLink extends React.Component<iProps> {

    render() {
        return (
            <Link {...this.props}>
                <Nav.Link href={this.props.to}>
                    {this.props.children}
                </Nav.Link>
            </Link>
        );
    }
}