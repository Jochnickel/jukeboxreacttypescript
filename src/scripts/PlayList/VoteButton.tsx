import React from "react";
import {Button} from "react-bootstrap";

export default function VoteButton(props: any) {
    props.variant = (props.plus) ? "outline-success" : "outline-danger";
    props.plus = undefined;
    return(
        <Button {...props}/>
    );
}