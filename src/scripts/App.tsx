import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import '../styles/App.css';
import Footer from "./Footer";
import Home from "./Home";
import HostDialog from "./Home/HostDialog";
import JoinDialog from "./Home/JoinDialog";
import LinkButton from "./LinkButton";
import Lobby from "./Lobby";
export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="container">

                        <Route path="/" exact={true} component={Home}/>
                        <Route path="/host" exact={true}/>
                        <Route path="/lobby/:hash" component={Lobby}/>

                        <Route path={["/hostdialog", "/joindialog"]} exact={true}>
                            <LinkButton to={"/"} block>Back</LinkButton>
                        </Route>
                        <Route path="/hostdialog" exact={true} component={HostDialog}/>
                        <Route path="/joindialog" exact={true} component={JoinDialog}/>

                        <Footer/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}