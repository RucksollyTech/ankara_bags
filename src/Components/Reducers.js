import { ADD_CART_FAIL, ADD_CART_REQUEST, ADD_CART_SUCCESS,  ADD_WISH_FAIL, ADD_WISH_REQUEST, ADD_WISH_SUCCESS, ALL_BAGS_FAIL, ALL_BAGS_REQUEST, ALL_BAGS_SUCCESS, BAG_DETAIL_FAIL, BAG_DETAIL_REQUEST, BAG_DETAIL_SUCCESS, CHECKOUT_FAIL, CHECKOUT_REQUEST, CHECKOUT_SUCCESS, FEATURED_BAGS_FAIL, FEATURED_BAGS_REQUEST, FEATURED_BAGS_SUCCESS, HOME_VIEW_FAIL, HOME_VIEW_REQUEST, HOME_VIEW_SUCCESS, PERSONALIZED_BAG_FAIL, PERSONALIZED_BAG_REQUEST, PERSONALIZED_BAG_RESET, PERSONALIZED_BAG_SUCCESS } from "./Constants"
import { ADJUST_HEIGHT_FAIL, ADJUST_HEIGHT_REQUEST, ADJUST_HEIGHT_SUCCESS } from "./Constants"

export const homeReducer =(state={},action)=>{
    switch(action.type){
        case HOME_VIEW_REQUEST:
            return {loading:true,...state}
        case HOME_VIEW_SUCCESS:
            return {loading:false, ...action.payload}
        case HOME_VIEW_FAIL:
            return {loading: false,error:action.payload}
        default:
            return state
    }
}
export const heightAddReducer =(state={},action)=>{
    switch(action.type){
        case ADJUST_HEIGHT_REQUEST:
            return {loading:true}
        case ADJUST_HEIGHT_SUCCESS:
            return {loading:false, height:action.payload}
        case ADJUST_HEIGHT_FAIL:
            return {loading: false,error:action.payload}
        default:
            return state
    }
}
export const checkoutReducer =(state={},action)=>{
    switch(action.type){
        case CHECKOUT_REQUEST:
            return {loading:true}
        case CHECKOUT_SUCCESS:
            return {loading:false, result:action.payload}
        case CHECKOUT_FAIL:
            return {loading: false,error:action.payload}
        default:
            return state
    }
}
export const personalRequestReducer =(state={},action)=>{
    switch(action.type){
        case PERSONALIZED_BAG_REQUEST:
            return {loading:true}
        case PERSONALIZED_BAG_SUCCESS:
            return {loading:false, success:action.payload}
        case PERSONALIZED_BAG_FAIL:
            return {loading: false,error:action.payload}
        case PERSONALIZED_BAG_RESET:
            return {}
        default:
            return state
    }
}

export const cartAddReducer =(state={},action)=>{
    switch(action.type){
        case ADD_CART_REQUEST:
            return {loading:true}
        case ADD_CART_SUCCESS:
            return {loading:false, cart:action.payload}
        case ADD_CART_FAIL:
            return {loading: false,error:action.payload}
        default:
            return state
    }
}
export const wishAddReducer =(state={},action)=>{
    switch(action.type){
        case ADD_WISH_REQUEST:
            return {loading:true}
        case ADD_WISH_SUCCESS:
            return {loading:false, wish:action.payload}
        case ADD_WISH_FAIL:
            return {loading: false,error:action.payload}
        default:
            return state
    }
}
export const bagDetailReducer =(state={},action)=>{
    switch(action.type){
        case BAG_DETAIL_REQUEST:
            return {loading:true}
        case BAG_DETAIL_SUCCESS:
            return {loading:false, bag:action.payload}
        case BAG_DETAIL_FAIL:
            return {loading: false,error:action.payload}
        default:
            return state
    }
}
export const allBagsReducer =(state={},action)=>{
    switch(action.type){
        case ALL_BAGS_REQUEST:
            return {loading:true,...state}
        case ALL_BAGS_SUCCESS:
            return {loading:false, bags:action.payload}
        case ALL_BAGS_FAIL:
            return {loading: false,error:action.payload}
        default:
            return state
    }
}
export const featuredBagsReducer =(state={},action)=>{
    switch(action.type){
        case FEATURED_BAGS_REQUEST:
            return {loading:true,...state}
        case FEATURED_BAGS_SUCCESS:
            return {loading:false, bags:action.payload}
        case FEATURED_BAGS_FAIL:
            return {loading: false,error:action.payload}
        default:
            return state
    }
}









