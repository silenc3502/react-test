import NaviBar from "./components/NaviBar";
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from "./components/Home";
import Texts from "./components/Texts";
import Words from "./components/Words";
import {Component} from "react";

class App extends Component {
    render() {
        return (
            <Router>
                <NaviBar>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/texts" component={Texts}/>
                        <Route exact path="/words" component={Words}/>
                    </div>
                </NaviBar>
            </Router>
        );
    }
}

export default App;
