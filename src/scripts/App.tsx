import React from 'react';
import '../styles/App.css';
import Footer from "./Footer";
import Home from "./Home";
import Host from "./Host";


export default class App extends React.Component {
    public main = <Home/>;

    constructor(props: any) {
        super(props);
        this.main = <Host/>;

    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    {this.main}
                </div>
                <Footer/>
            </div>
        );
    }
}