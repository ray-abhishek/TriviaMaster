import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'
import RestaurantDetails from '../Parts/RestaurantDetails'
import { v4 as uuidv4 } from 'uuid'

const basicGrid = {
    display : 'grid',
    gap : 1,
    gridTemplateColumns : 'repeat(auto-fill, 200px)'
}

export default function Restaurant(){

    const restaurants = useSelector(state => state.menu.restaurants)

    console.log(restaurants,  " are restaurants")

    return(
        <Grid style={basicGrid}>
            {
                restaurants.map(restaurant => {
                    return <RestaurantDetails key={uuidv4()} {...restaurant}/>
                })
            }
        </Grid>
    )
}