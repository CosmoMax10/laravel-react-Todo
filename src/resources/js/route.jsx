import React from "react";
import ReactDoM from 'react-dom';

import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

import Example from "./pages/Example";
import Home from "./pages/Home";

function App() {
    return (
        <div>
            <Switch>

                <Route path='/example' exact component={Example}/>
                <Route path='/' exact component={Home}/>
            </Switch>
        </div>
    )
}

ReactDoM.render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('app'));
