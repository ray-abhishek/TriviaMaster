import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import RestaurantDetails from '../Parts/RestaurantDetails'
import { v4 as uuidv4 } from 'uuid'

const basicGrid = {
    display : 'flex',
    flexDirection : 'column',
    maxWidth : '77%',
    margin : '0 auto',
    paddingBottom : '60px',
}

export default function Restaurant(props){
    console.log(props, " are props inside RESTAURANT")
    const restaurants = useSelector(state => state.menu.restaurants)
    
    console.log(restaurants,  " are restaurants")

    return(
        <Grid style={basicGrid}>
            {
                restaurants.map((restaurant,index) => {
                    restaurant["index"] = index
                    return <RestaurantDetails key={uuidv4()} data={restaurant}/>
                })
            }
            
        </Grid>
    )
}