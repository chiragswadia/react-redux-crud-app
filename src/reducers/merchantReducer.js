import * as actionTypes from '../actions/actionTypes';

const initialState = {
    merchantList : [],
}

function merchantReducer(state = initialState, action){
    switch(action.type){
        case actionTypes.GET_MERCHANTS_LIST_SUCCESS:
        case actionTypes.GET_MERCHANTS_LIST_FAILURE:
        case actionTypes.DELETE_MERCHANT_SUCCESS:
        case actionTypes.DELETE_MERCHANT_FAILURE:
        case actionTypes.ADD_MERCHANT_SUCCESS:
        case actionTypes.ADD_MERCHANT_FAILURE:
            return Object.assign({}, state, action.payload)
        default:
            return state;
    }
}

export default merchantReducer;