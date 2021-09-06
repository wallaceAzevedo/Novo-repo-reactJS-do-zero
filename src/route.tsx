import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from "./pages/LandingPage";


//<Route path="/" component ={}/>

function route(){
    return (
        <BrowserRouter>
            <Route path="/" exact component ={LandingPage}/>
         
           
        </BrowserRouter>
    )
}

export default route;