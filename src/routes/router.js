import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useLocation
} from "react-router-dom";

import Header from "../components/Header.js"
import TableView from "../views/TableView.js";
import Home from "../views/Home.js";
import Error404 from '../views/Error404.js';

export default function router() {
    return(
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/table" component={TableView}/>
            <Route path="*" component={Error404}/>
        </Switch>
    </Router>
    )
}

function NoMatch() {
    let location = useLocation();
  
    return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }