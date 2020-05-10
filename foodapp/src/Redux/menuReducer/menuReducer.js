import restaurantData from './resData.json'
import categoryData from './catData.json'
import foodData from './foodData.json'
import { ADD_TO_CART, REMOVE_FROM_CART } from './action.js'

const initialState = {
    food : foodData,
    restaurants : restaurantData,
    categories : categoryData,
    cart : {}
}

export default function menuReducer( state = initialState , { type , payload } ){

    console.log("State of menuReducer is ",state)
    console.log(type, " is action type while payload is ",payload)

    switch(type){
        case ADD_TO_CART : 
            console.log("ADD TO CART : payload : ",payload)
            var tempCart = {...state.cart}
            if(tempCart[payload.restaurant]){

                if(tempCart[payload.restaurant][payload.item.name])
                {
                    tempCart[payload.restaurant][payload.item.name].qty+=1
                }
                else 
                {
                    tempCart[payload.restaurant][payload.item.name] = payload.item 
                    tempCart[payload.restaurant][payload.item.name].qty = 1
                }
            }
            else {
                tempCart[payload.restaurant] = {
                    [payload.item.name] : payload.item 
                }
                tempCart[payload.restaurant][payload.item.name].qty = 1
            }
            return {
                ...state,
                cart : tempCart
            }  
        case REMOVE_FROM_CART :
            console.log("REMOVE_FROM_CART : payload : ",payload)
            var tempCart = {...state.cart}
            if(tempCart[payload.restaurant]){

                if(tempCart[payload.restaurant][payload.item.name].qty > 1)
                {
                    tempCart[payload.restaurant][payload.item.name].qty-=1
                }
                else if(tempCart[payload.restaurant][payload.item.name].qty === 1)
                {
                    delete tempCart[payload.restaurant][payload.item.name]
                    if(Object.keys(tempCart[payload.restaurant]).length === 0)
                    delete tempCart[payload.restaurant]
                    console.log(tempCart, " is tempCart in DELETE Reducer Function")
                }
            }
            else {
                console.log("Attempting to Remove something that should never have been there to begin with")
            }
            return {
                ...state,
                cart : tempCart
            }
        default : return state 
    }
}

