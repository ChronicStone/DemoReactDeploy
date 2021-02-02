import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

import Header from "../components/Header.js"
import TableView from "../views/TableView.js";
import Home from "../views/Home.js";
import Error404 from '../views/Error404.js';
import JsxExampleView from "../views/JsxExampleView.js";
import CounterView from "../views/CounterView.js"

export default function router() {
    return(
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/table" component={TableView}/>
            <Route exact path="/counter" component={CounterView}/>
            <Route exact path='/jsx-example' component={JsxExampleView}/>
            <Route path="*" component={Error404}/>
        </Switch>
    </Router>
    )
}