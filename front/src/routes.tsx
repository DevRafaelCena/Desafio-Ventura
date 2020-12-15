import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Inicial from "./pages/Inicial"


function Routes(){
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Inicial} />
       
        </Switch>
        
        </BrowserRouter>

    );
}

export default Routes
