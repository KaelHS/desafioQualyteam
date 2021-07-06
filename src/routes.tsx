import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { NonConformityInfo } from "./pages/NonConformityInfo";

export function Routes() {
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            {/* <Route exact path="/nonconformity/" component={Home}/> */}
            <Route exact path="/nonconformity/:id" component={NonConformityInfo}/>
            <Route exact path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
    );
}