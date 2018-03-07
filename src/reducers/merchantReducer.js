import * as actionTypes from '../actions/actionTypes';

const initialState = {
    merchantList : [],
}

function merchantReducer(state = initialState, action){
    switch(action.type){
        case actionTypes.GET_MERCHANTS_LIST:
        case actionTypes.GET_MERCHANTS_LIST_FAILURE:
            return Object.assign({}, state, action.payload)
        default:
            return state;
    }
}

export default merchantReducer;