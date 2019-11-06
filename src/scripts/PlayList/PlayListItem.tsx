import React from "react";
import {Media} from "react-bootstrap";
import VoteButtonGroup from "./VoteButtonGroup";
import ISong from "../ISong";
import ILobby from "../ILobby";
import IPlayerControls from "../Player/IPlayerControls";

export default class PlayListItem extends React.Component<{song: ISong; lobby: ILobby; votable: boolean;} & IPlayerControls> {
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
                    <h5>{this.props.song.title}</h5>
                    <p style={{fontSize: "5px"}}>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                        fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </Media.Body>
                <VoteButtonGroup {...this.props}/>
            </Media>
        );
    }
}