import React from 'react'
import { useSelector } from 'react-redux'
import { Grid, Typography, Paper } from '@material-ui/core'

export default function Cart() {

    const cart = useSelector(state => state.menu.cart)
    
    console.log("in cart")

    var totalCost = 0, itemCount = 0, totalCount = 0
    for(let key in cart){
        var tempRestaurant = cart[key]
        itemCount = 0
        for(let keyItem in tempRestaurant){
         //   console.log(keyItem, " is item inside restaurant ",tempRestaurant)
            totalCost+= Number(tempRestaurant[keyItem].cost) * Number(tempRestaurant[keyItem].qty)
            itemCount+= tempRestaurant[keyItem].qty
        }
        totalCount+=itemCount
    }
    
    return(
        <div style={cartContainer}>
         {   Object.keys(cart).map(restaurant => {
                return <Grid style={cartRow} component={Paper}>
                    <Grid item xs={6}>
                        <Typography>{restaurant}</Typography>
                    </Grid>
                    <Grid item xs={6}>{Object.keys(cart[restaurant]).map(item => {
                        return <Grid style={foodRow}>
                                    <Grid item xs={5}>
                                        <Typography>
                                        {cart[restaurant][item].name}</Typography>
                                    </Grid>
                                    <Grid item xs={1}>
                                        {cart[restaurant][item].cost}
                                    </Grid>
                                    <Grid item xs={1}> 
                                        x
                                    </Grid>
                                    <Grid item xs={1}>
                                        {cart[restaurant][item].qty}
                                    </Grid> 
                                    <Grid item xs={1}>
                                        =
                                    </Grid> 
                                    <Grid item xs={3}>
                                        {Number(cart[restaurant] [item].qty) * 
                                    Number(cart[restaurant][item].cost) }
                                    </Grid>
                                </Grid>
                    })}</Grid>
                </Grid>
            })
        }
        <hr style={{backgroundColor : '#921524'}}/>
        <h1 style={headingStyle}>Total : {totalCost}</h1>
        </div>
    )
}

const cartContainer = {
    maxWidth : '950px',
    margin : '0 auto',
}

const cartRow = {
    margin : '20px',
    display : 'flex',
    backgroundColor : 'white',
    padding : '2rem'
}

const foodRow = {
    display : 'flex',
    flexDirection : 'row'
}

const headingStyle = {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'flex-end'
}