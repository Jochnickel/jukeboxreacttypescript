import React from 'react';
import '../styles/App.css';
import Footer from "./Footer";
import Home from "./Home";


export default class App extends React.Component {
    public main = <Home/>;

    constructor(props: any) {
        super(props);
        this.main = <Home/>;
    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    {/*<header className="App-header">*/}
                    {/*    <img src={logo} className="App-logo" alt="logo"/>*/}
                    {/*    <p>*/}
                    {/*        Edit <code>src/App.tsx</code> and save to reload.*/}
                    {/*    </p>*/}
                    {/*    <a*/}
                    {/*        className="App-link"*/}
                    {/*        href="https://reactjs.org"*/}
                    {/*        target="_blank"*/}
                    {/*        rel="noopener noreferrer"*/}
                    {/*    >*/}
                    {/*        Learn React*/}
                    {/*    </a>*/}
                    {/*</header>*/}
                    {this.main}
                </div>
                <Footer/>
            </div>
        );
    }
}

//
// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// };
//
// export default App;
