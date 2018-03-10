import {toastr} from 'react-redux-toastr'
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
            toastr.success('Merchant with id '+ id + ' deleted successfully');
            dispatch( getMerchantList() ); // fetch all merchants again so that sorting and pagination is taken care of
        }, function(error){
            dispatch( deleteMerchantFailure() );
            toastr.error('Failed to delete merchant');
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

/*******************************************************************************************/

const addMerchant = (request_data) => {
    return (dispatch, getState) => {
        axios.post(API_SERVER + '/merchants', request_data).then(function(){
            dispatch( addMerchantSuccess() );
            toastr.success('Merchant Added Successfully');
            dispatch( getMerchantList() ); // fetch all merchants again so that sorting and pagination is taken care of
        }).catch(function(error){
            dispatch( addMerchantFailure() );
            toastr.error('Failed to add Merchant');
        })
    }
};

const addMerchantSuccess = () => {
    return {
        type: actionTypes.ADD_MERCHANT_SUCCESS,
        payload: {

        }
    }
};

const addMerchantFailure = (error) => {
    return {
        type: actionTypes.ADD_MERCHANT_FAILURE,
        payload: {

        }
    }
};

/*******************************************************************************************/

const updateMerchant = (request_data) => {
    return (dispatch, getState) => {
        axios.put(API_SERVER + '/merchants/' + request_data['id'], request_data).then(function(response){
            dispatch( updateMerchantSuccess(response.data) );
            toastr.success('Merchant updated successfully');
        }).catch(function(error){
            dispatch( updateMerchantFailure() );
            toastr.error('Failed to update merchant. Some error occurred');
        })
    }
};

const updateMerchantSuccess = (updatedMerchantData) => {
    return {
        type: actionTypes.UPDATE_MERCHANT_SUCCESS,
        payload: {
            ...updatedMerchantData
        }
    }
};

const updateMerchantFailure = (error) => {
    return {
        type: actionTypes.UPDATE_MERCHANT_FAILURE,
        payload: {

        }
    }
};


export {
    addMerchant,
    deleteMerchant,
    getMerchantList,
    updateMerchant,
};