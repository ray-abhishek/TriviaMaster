import React from 'react'
import { useSelector } from 'react-redux'
import { Typography , Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

export default function CartBar() {

    const cart = useSelector(state => state.menu.cart)
    console.log(cart, " Is CART INSIDE CartBar")

    var totalCost = 0, itemCount = 0, totalCount = 0
    for(let key in cart){
        var tempRestaurant = cart[key]
        itemCount = 0
        for(let keyItem in tempRestaurant){
            console.log(keyItem, " is item inside restaurant ",tempRestaurant)
            totalCost+= Number(tempRestaurant[keyItem].cost) * Number(tempRestaurant[keyItem].qty)
            itemCount+= tempRestaurant[keyItem].qty
        }
        totalCount+=itemCount
    }

    return (
        <div style={cartBarStyle}>
            <div style={center}> 
           <Typography>You have {totalCount} items in your cart totalling to {totalCost}</Typography>  
           <Link to="/Cart"><Button style={cartBarBtnStyle}>Checkout</Button></Link>
           </div>
        </div>
    )
}
const center = {
    maxWidth : '950px',
    margin : '0 auto',
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
}

const cartBarStyle = {
    padding : '10px',
    position : 'fixed',
    width : '100%',
    bottom : '0',
    left : '0',
    backgroundColor : '#921524',
    color : 'white',
    zIndex : '3',
    
}

const cartBarBtnStyle = {
    color : 'whitesmoke',
    padding : '10px',
    fontWeight : '900',
    marginLeft : '40px'
}