import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../Redux/menuReducer/action';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import IndeterminateCheckBoxOutlinedIcon from '@material-ui/icons/IndeterminateCheckBoxOutlined';
import { Typography } from '@material-ui/core';


export default function ItemCount ({ restaurant , item , style }) {

    const dispatcher = useDispatch()
    var { cart } = useSelector(state => state.menu)

    return(
        <div className={style}>
                <div onClick={()=>dispatcher(addToCart({"restaurant" : restaurant, "item" : item}))}><AddBoxOutlinedIcon/></div>
                <Typography>
                  { cart ? (cart[restaurant] ? (cart[restaurant][item.name] ? cart[restaurant][item.name].qty : 0 )  : 0) : 0 }
                </Typography>
                <div onClick={()=>dispatcher(removeFromCart({"restaurant" : restaurant, "item" : item}))}>
                  <IndeterminateCheckBoxOutlinedIcon/>
                </div>
        </div>
    )
}

