import {Button, ButtonProps} from "react-bootstrap";
import React, {Component} from "react";

interface props {
    plus: boolean;
}

export default class VoteButton extends Component<ButtonProps & props> {
    render() {
        const variant = (this.props.plus) ? "outline-success" : "outline-danger";
        return (
            <Button variant={variant} plus={undefined} {...this.props}/>
        );
    }
};