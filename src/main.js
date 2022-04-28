import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Gallery from "./pages/gallery";
import { Route, Switch} from "react-router-dom"

export default class Main extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/gallery" component={Gallery}/>
            </Switch>
        )
    }
}