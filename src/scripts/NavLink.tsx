import React from "react";
import {Link, NavLinkProps} from "react-router-dom";
import {Nav} from "react-bootstrap";

interface props extends NavLinkProps{
    to: string;
    Link?: any;
    NavLink?: any;
}

export default class NavLink extends React.Component<props>{
    render() {
        return (
            <Link to={this.props.to} {...this.props.Link}>
                <Nav.Link href={this.props.to} {...this.props.NavLink}>{this.props.children}</Nav.Link>
            </Link>
        );
    }
}