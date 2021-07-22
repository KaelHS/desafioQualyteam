import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { NonConformityInfo } from "./pages/NonConformityInfo";
import { QueryPage } from "./pages/QueryPage";

export function Routes() {
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/query" component={QueryPage} />
            <Route exact path="/nonconformity" component={Home}/>
            <Route exact path="/nonconformity/:id" component={NonConformityInfo}/>
        </Switch>
    </BrowserRouter>
    );
}