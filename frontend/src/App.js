import './App.css';
import {MainPage} from "./MainPage/MainPage";
import {Redirect, Switch} from "react-router";
import {Route} from "react-router";
import {FORM_ROUTE, TABLE_ROUTE} from "./Const";
import {Inputs} from "./MainPage/Inputs/Inputs";
import {Menu} from "./MainPage/Menu/Menu";
import React from "react";

function App() {
    return (
        <div className="App">
               <Menu/>
            <Switch>
                <Route exact path="/">
                    <Redirect to={FORM_ROUTE}/>
                </Route>
                <Route exact path={TABLE_ROUTE} render={() => <MainPage/>}/>
                <Route exact path={FORM_ROUTE} render={() => <Inputs/>}/>
            </Switch>
        </div>
    );
}

export default App;
