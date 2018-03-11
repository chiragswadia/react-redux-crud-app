import * as actionTypes from '../actions/actionTypes';

const initialState = {
    merchantList : [],
    previousPageLink: "", 
    nextPageLink: "" // this will be overwritten once merchant list is fetched from back-end API and we get the latest pagination status
}

function merchantReducer(state = initialState, action){
    switch(action.type){
        case actionTypes.GET_MERCHANTS_LIST_SUCCESS:
        case actionTypes.GET_MERCHANTS_LIST_FAILURE:
        case actionTypes.DELETE_MERCHANT_SUCCESS:
        case actionTypes.DELETE_MERCHANT_FAILURE:
        case actionTypes.ADD_MERCHANT_SUCCESS:
        case actionTypes.ADD_MERCHANT_FAILURE:
        case actionTypes.UPDATE_MERCHANT_FAILURE:
        case actionTypes.UPDATE_PAGINATION_STATE:
            return Object.assign({}, state, action.payload)
        case actionTypes.UPDATE_MERCHANT_SUCCESS:
            const updatedMerchantList = state.merchantList.map( (merchant) => { // Using map here because at max there will be only 10 merchants in the state ( single page )
                if(merchant.id === action.payload.id){
                    return action.payload;
                }
                return merchant
            })
            return Object.assign({}, state, {merchantList: updatedMerchantList} );
        default:
            return state;
    }
}

export default merchantReducer;