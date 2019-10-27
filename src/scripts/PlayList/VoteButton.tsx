import {ButtonProps} from "react-bootstrap";
import {Component} from "react";

interface props {
    plus: boolean;
}

export default class VoteButton extends Component<ButtonProps & props> {
    constructor(props: any) {
        const p;
        props.forEach((d: any)=>{
            p
        });
        p.variant = (p.plus) ? "outline-success" : "outline-danger";
        p["plus"] = undefined;
        super(p);
    }
}