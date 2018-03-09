import * as actionTypes from './actionTypes';
import axios from 'axios';

const API_SERVER = 'http://localhost:3001';

const getMerchantList = () => {

    return (dispatch, getState) => {
        axios.get(API_SERVER + '/merchants').then(function(response){
            const merchantList = response.data;
            dispatch( getMerchantListSuccess(merchantList) )
        }, function(error){
            dispatch( getMerchantListFailure(error) ) // log the error or show in popup/alert
        })
    }
   
};

const getMerchantListSuccess = (merchantList) => {
    return {
        type: actionTypes.GET_MERCHANTS_LIST_SUCCESS,
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

/*************************************************************************************************/

const deleteMerchant = (id) => {
    return (dispatch, getState) => {
        axios.delete(API_SERVER + '/merchants/' + id).then(function(response){
            dispatch( deleteMerchantSuccess() );
            dispatch( getMerchantList() );
        }, function(error){
            dispatch( deleteMerchantFailure() );
        });
    }
};

const deleteMerchantSuccess = (response) => {
    return {
        type: actionTypes.DELETE_MERCHANT_SUCCESS,
        payload: {

        }
    }
};

const deleteMerchantFailure = (error) => {
    return {
        type: actionTypes.DELETE_MERCHANT_FAILURE,
        payload: {

        }
    }
};


export {
    getMerchantList,
    getMerchantListSuccess,
    getMerchantListFailure,
    deleteMerchant,
    deleteMerchantSuccess,
    deleteMerchantFailure
};