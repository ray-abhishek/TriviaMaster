import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Food from '../Components/Pages/Food'
import Restaurants from '../Components/Pages/Restaurants'
import Catalog from '../Components/Pages/Catalog'
import Menu from '../Components/Pages/Menu'
import Cart from '../Components/Pages/Cart'

function Routing(){

    return(
    <Switch>
        
        <Route path="/" exact render={(props)=><Food {...props} /> } />
        
        <Route path="/restaurants" exact render={(props)=><Restaurants {...props} /> } />

        <Route path="/restaurants/:index" render={(props)=><Menu {...props} /> } />

        <Route path="/cart" exact render={(props)=><Cart {...props} /> } />

        <Route path="/:category" render={(props)=><Catalog {...props} /> } />

        
    </Switch>
    )
}

export default Routing