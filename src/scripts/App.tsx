import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import '../styles/App.css';
import Footer from "./Footer";
import Home from "./Home";
import Host from "./Host";
import Client from "./Client";
import HostDialog from "./Home/HostDialog";
import JoinDialog from "./Home/JoinDialog";
import LinkButton from "./LinkButton";


export default class App extends React.Component {
    main = <Host/>;

    render() {

        return (
            <BrowserRouter>
                <div className="App">
                    <div className="container">
                        <Route path="/" exact={true} component={Home}/>
                        <Route path="/host" exact={true} component={Host}/>
                        <Route path="/lobby" component={Client}/>

                        <Route path={["/hostdialog","/joindialog"]} exact={true}> <LinkButton to={"/"} block>Back</LinkButton> </Route>
                        <Route path="/hostdialog" exact={true} component={HostDialog}/>
                        <Route path="/joindialog" exact={true} component={JoinDialog}/>
                        <Footer/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}