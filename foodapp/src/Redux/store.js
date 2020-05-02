import { createStore , combineReducers , applyMiddleware , compose } from 'redux'
import menuReducer from './menuReducer/menuReducer'
import reportReducer from './reportReducer/reportReducer'
//import saveData from './localStorage'
import throttle from 'lodash/throttle'

const rootReducer = combineReducers({ menu : menuReducer , report : reportReducer })

const logger = () => next => action => {
    console.log("logger: dispatching action : ",action)
    return next(action)
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(logger))
)

/*
store.subscribe(throttle(
    ()=> saveData("state",store.getState()) , 
    1000
    ))
*/
export default store 