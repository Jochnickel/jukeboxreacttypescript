import React from 'react';
import '../styles/App.css';
import Footer from "./Footer";
import Home from "./Home";
import Host from "./Host";
import Client from "./Client";
import {BrowserRouter, Route, Router} from "react-router-dom";


export default class App extends React.Component {
    main = <Host />;

    constructor(props: any) {
        super(props);
        // this._main = <Home/>;
        // this.setMain(<Home/>);
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <BrowserRouter>
                        <Route path="/" exact={true} component={Home}/>
                        <Route path="host" exact={true} component={Host}/>
                        <Route path="client" exact={true} component={Client}/>
                    </BrowserRouter>
                </div>
                <Footer/>
            </div>
        );
    }
}