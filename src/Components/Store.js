import {createStore, combineReducers, applyMiddleware,compose} from "redux"
import {thunk} from "redux-thunk"
import { allBagsReducer, bagDetailReducer, cartAddReducer, checkoutReducer, featuredBagsReducer, heightAddReducer, homeReducer, personalRequestReducer, wishAddReducer } from "./Reducers"


const reducer = combineReducers({
    home:homeReducer,
    cartAdd : cartAddReducer,
    height : heightAddReducer,
    wishAdd : wishAddReducer,
    bag:bagDetailReducer,
    checkout : checkoutReducer,
    personalized : personalRequestReducer,
    allBags :allBagsReducer,
    featuredBags :featuredBagsReducer,
})

const middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)
));

export default store












