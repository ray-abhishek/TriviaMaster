import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Custom from '../Pages/Custom'
import Random from '../Pages/Random'
import LandingPage from '../Pages/LandingPage'

export default class Routing extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Switch>
                <Route path="/" exact component={LandingPage}/>
                <Route path="/custom" component={Custom}/>
                <Route path="/random" component={Random}/>
            </Switch>
        )
    }
}