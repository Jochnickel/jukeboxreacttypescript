import React from "react";
import {Button, ButtonGroup, Media} from "react-bootstrap";
import VoteButton from "./VoteButton";

interface props {
    Votable: boolean;
}

export default class PlayListItem extends React.Component<props> {
    constructor(props: any) {
        super(props);

    }


    render() {
        return (
            <Media as="li">
                <img
                    src="https://images.squarespace-cdn.com/content/v1/5ba9e4fd7d0c91794c7a0d05/1553782990501-ZKR3KHOP2DPGGFZTFBDD/ke17ZwdGBToddI8pDm48kLkOk2-PBAPfkws_PZGGIvVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx1mKApGnLuyf_QWDLzisLJ1TTVDReRUp4eP8s7DtZ5HGrhpxTElWSNBwV_R_WsKXM/BuyNow.png"
                    width="150"
                    // className="d-inline-block align-top"
                    alt=""
                />
                <Media.Body>
                    <h5>List-based media object</h5>
                    <p style={{fontSize:"5px"}}>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                        fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </Media.Body>
                <ButtonGroup vertical>
                    <VoteButton plus={true}>+</VoteButton>
                    <VoteButton plus={false}>-</VoteButton>
                </ButtonGroup>
            </Media>
        );
    }
}