import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@material-ui/core'
import { addToCart } from '../../Redux/menuReducer/action';

export default function AddButton ({ restaurant , item }) {
    const dispatcher = useDispatch()

    return(
        <Button style={{backgroundColor : 'rgb(59, 228, 143)'}} onClick={()=>dispatcher(addToCart({"restaurant" : restaurant, "item" : item}))}>A D D</Button>
    )
}