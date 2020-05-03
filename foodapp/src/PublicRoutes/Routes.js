import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Food from '../Components/Pages/Food'
import Restaurants from '../Components/Pages/Restaurants'
import Catalog from '../Components/Pages/Catalog'

function Routing(){

    return(
    <Switch>
        
        <Route path="/" exact render={(props)=><Food {...props} /> } />
        
        <Route path="/restaurants" render={(props)=><Restaurants {...props} /> } />

        <Route path="/:category" render={(props)=><Catalog {...props} /> } />
    </Switch>
    )
}

export default Routing