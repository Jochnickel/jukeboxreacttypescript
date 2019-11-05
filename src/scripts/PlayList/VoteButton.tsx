import {Button, ButtonProps} from "react-bootstrap";
import React, {Component} from "react";

interface props {
    plus: boolean;
    voted: any;
    onClick: any;
}

export default class VoteButton extends Component<ButtonProps & props> {
    render() {
        const variant = (this.props.plus) ? "outline-success" : "outline-danger";
        const props = Object.assign({...this.props},{variant: variant, plus: undefined, voted: undefined});
        return (
            <Button {...props}/>
        );
    }
};