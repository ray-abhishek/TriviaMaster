const ADD_TO_CART = "ADD_TO_CART"
const REMOVE_FROM_CART = "REMOVE_FROM_CART"

const addToCart = (payload) => ({
    type : ADD_TO_CART,
    payload 
})

const removeFromCart = (payload) => ({
    type : REMOVE_FROM_CART,
    payload 
})


export {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    addToCart,
    removeFromCart,
}

