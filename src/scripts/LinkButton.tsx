import React from "react";
import {Link} from "react-router-dom";
import {Button, ButtonProps} from "react-bootstrap";

interface props extends ButtonProps{
    to: any;
}

export default class LinkButton extends React.Component<props>{
    render() {
        return (
            <Link to={this.props.to}>
                <Button {...this.props}>
                    {this.props.children}
                </Button>
            </Link>
        );
    }
}