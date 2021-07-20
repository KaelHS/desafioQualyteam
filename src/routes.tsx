import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { NonConformityInfo } from "./pages/NonConformityInfo";

export function Routes() {
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/nonconformity" component={Home}/>
            <Route exact path="/nonconformity/:id" component={NonConformityInfo}/>
            <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
    </BrowserRouter>
    );
}