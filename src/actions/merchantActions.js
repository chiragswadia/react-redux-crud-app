import * as actionTypes from './actionTypes';
import * as mockApi from '../services/mockApi';

const getMerchantList = () => {

    return (dispatch, getState) => {
        mockApi.getMerchants().then(function(response){
            const merchantList = response.data; // merchant list array
            dispatch( getMerchantListSuccess(merchantList) )
        }, function(error){
            dispatch( getMerchantListFailure(error) ) // log the error or show in popup/alert
        })
    }
   
};

const getMerchantListSuccess = (merchantList) => {
    return {
        type: actionTypes.GET_MERCHANTS_LIST,
        payload: {
            merchantList: merchantList
        }
    }
};

const getMerchantListFailure = (error) => {
    return {
        type: actionTypes.GET_MERCHANTS_LIST_FAILURE,
        payload: {
            merchantList: [] // blank array as merchants could not be fetched for some reason
        }
    }
};

export {
    getMerchantList,
    getMerchantListSuccess,
    getMerchantListFailure
};