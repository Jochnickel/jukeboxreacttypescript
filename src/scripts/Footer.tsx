import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink, RouteComponentProps} from "react-router-dom";
import store from "./Store";
import ILobby from "./ILobby";
import Api from "./Api";
import DeadLink from "./DeadLink";
import QRToast from "./QRToast";

export default class Footer extends React.Component<RouteComponentProps> {
    constructor(props: any) {
        super(props);
        store.on("change", () => {
            this.setState({lobby: store.getCurrentLobby()})
        });
    }

    state = {lobby: store.getCurrentLobby(), toast: false};


    render() {
        const {lobby} = this.state;
        const hash = (lobby) ? (lobby! as ILobby).hash : undefined;
        const url = "/lobby/" + hash;
        const handleDelete = () => Api.lobby(hash!).delete().then(() => window.location.assign(""));
        return (
            <Navbar style={{height: "3em"}} fixed="bottom" bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <NavLink className={"nav-link"} exact={true} to={".."}>Home</NavLink>
                    {lobby && <>
                        <NavLink className={"nav-link"} to={url}>Current</NavLink>
                        <DeadLink navLink to={"/"} onClick={handleDelete}> Delete Lobby</DeadLink>
                        <DeadLink navLink to={url} onClick={() => this.setState({toast: true})}>Share Lobby</DeadLink>
                        <QRToast show={this.state.toast} value={"http://www.yt-party.com" + url}
                                 handleClose={() => this.setState({toast: false})}/>
                    </>}
                </Nav>
                <Navbar.Brand href="https://www.disastles.com/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5ba9e4fd7d0c91794c7a0d05/1553782990501-ZKR3KHOP2DPGGFZTFBDD/ke17ZwdGBToddI8pDm48kLkOk2-PBAPfkws_PZGGIvVZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx1mKApGnLuyf_QWDLzisLJ1TTVDReRUp4eP8s7DtZ5HGrhpxTElWSNBwV_R_WsKXM/BuyNow.png"
                        width="60"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Navbar>
        );
    }
}