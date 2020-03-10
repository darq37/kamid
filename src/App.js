import React from 'react';
import Layout from "./components/Layout";
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import About from "./components/About";
import Main from "./components/Main";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";


class App extends React.Component {
    render() {
        return <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path={"/"} component={Main}/>
                    <Route path={"/kamid"} component={Main}/>
                    <Route path={"/about"} component={About}/>
                    <Route path={"/contact"} component={Contact}/>
                    <Route component={NoMatch}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    }
}


export default App;
