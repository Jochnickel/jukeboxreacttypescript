import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import '../styles/App.css';
import Footer from "./Footer";
import Home from "./Home/Home";
import HostDialog from "./Home/HostDialog";
import JoinDialog from "./Home/JoinDialog";
import LinkButton from "./LinkButton";
import Lobby from "./Home/Lobby";
import Api from "./Api";
import store from "./Store";
import ErrorPage from "./ErrorPage";
import Token from "./Token";

(window as any).api = Api;
(window as any).token = Token;

export default class App extends React.Component {
    constructor(props: any) {
        super(props);
        Api.lobby.get().then(r => {
            if (r.meta.code === 200) {
                console.info("Footer", r);
                const lobby = r.data.lobby[0];
                store.setCurrentLobby(lobby);
            } else {
                console.info("Footer", r);
            }
        });
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="container" style={{paddingBottom: "3.3em"}}>
                        <Switch>
                            <Route path="/error/:message?" strict={false} component={ErrorPage}/>

                            <Route path="/host" exact={true}/>
                            <Route path="/lobby/:hash?" component={Lobby}/>

                            <Route path={["/hostdialog", "/joindialog"]} exact={true}>
                                <LinkButton to={".."} block>Back</LinkButton>
                                <Route path="/hostdialog" exact={true} component={HostDialog}/>
                                <Route path="/joindialog" exact={true} component={JoinDialog}/>
                            </Route>
                            <Route path="/:else"><Redirect to={"/"}/></Route>
                            <Route component={Home}/>
                        </Switch>
                        <Route component={Footer}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}