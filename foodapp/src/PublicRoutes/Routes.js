import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Food from '../Components/Pages/Food'
import Restaurants from '../Components/Pages/Restaurants'

function Routing(){

    return(
    <Switch>
        
        <Route path="/" exact render={(props)=><Food {...props} /> } />
        
        <Route path="/restaurants" render={(props)=><Restaurants {...props} /> } />

    </Switch>
    )
}

export default Routing