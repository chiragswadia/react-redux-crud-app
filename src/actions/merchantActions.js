import {toastr} from 'react-redux-toastr'
import * as actionTypes from './actionTypes';
import axios from 'axios';

/* API Server url for Ajax requests */
const API_SERVER = 'http://localhost:3001';

/* Number of merchants to be shown on a single page */
const MERCHANTS_PER_PAGE = 6;

/**
 * This function is used for fetching the list of merchants from the back-end API
 * @param pageLink
 */
const getMerchantList = (pageLink='') => {

    const fetchMerchantsDefaultPageLink = API_SERVER + '/merchants?_sort=timestamp&_order=desc&_page=1&_limit=' + MERCHANTS_PER_PAGE;
    const fetchMerchantsLink = pageLink ? pageLink : fetchMerchantsDefaultPageLink;

    return (dispatch, getState) => {
        axios.get(fetchMerchantsLink).then(function(response){
            const merchantList = response.data;
            dispatch( getMerchantListSuccess(merchantList) )
            dispatch( updatePaginationState(response.headers.link) );
        }, function(error){
            dispatch( getMerchantListFailure(error) );
        })
    }
};


/**
 * Fetch merchant list success action dispatcher
 */
const getMerchantListSuccess = (merchantList) => {
    return {
        type: actionTypes.GET_MERCHANTS_LIST_SUCCESS,
        payload: {
            merchantList: merchantList
        }
    }
};

/**
 * Fetch merchant list failure action dispatcher
 */
const getMerchantListFailure = (error) => {
    return {
        type: actionTypes.GET_MERCHANTS_LIST_FAILURE,
        payload: {
            merchantList: [] // blank array as merchants could not be fetched for some reason
        }
    }
};

/**
 * This function is used for deleting a particular merchant
 * @param id id of the merchant to be deleted
 */
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

/**
 * Delete merchant success action dispatcher
 */
const deleteMerchantSuccess = (response) => {
    return {
        type: actionTypes.DELETE_MERCHANT_SUCCESS,
        payload: {

        }
    }
};

/**
 * Delete merchant failure action dispatcher
 */
const deleteMerchantFailure = (error) => {
    return {
        type: actionTypes.DELETE_MERCHANT_FAILURE,
        payload: {

        }
    }
};

/**
 * This function is used to add a new merchant to the back-end
 * @param request_data Single merchant information as object
 */
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

/**
 * Add merchant success action dispatcher
 */
const addMerchantSuccess = () => {
    return {
        type: actionTypes.ADD_MERCHANT_SUCCESS,
        payload: {

        }
    }
};

/**
 * Add merchant failure action dispatcher
 */
const addMerchantFailure = (error) => {
    return {
        type: actionTypes.ADD_MERCHANT_FAILURE,
        payload: {

        }
    }
};

/**
 * This function is used to update details of a particular merchant
 * @param request_data details of a single merchant which needs to be updated
 */
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

/**
 * Update merchant success action dispatcher
 */
const updateMerchantSuccess = (updatedMerchantData) => {
    return {
        type: actionTypes.UPDATE_MERCHANT_SUCCESS,
        payload: {
            ...updatedMerchantData
        }
    }
};

/**
 * Update merchant failure action dispatcher
 */
const updateMerchantFailure = (error) => {
    return {
        type: actionTypes.UPDATE_MERCHANT_FAILURE,
        payload: {

        }
    }
};

/**
 * This function will dispatch the latest pagination state based on the pagination data returned from merchant listing API
 * @param paginationLinks All links returned from the get merchant listing API response header
 */
const updatePaginationState = (paginationLinks) => {
    // Extract next previous links from the above string
    const paginationLinksList = paginationLinks.split(',');
    let nextPageLink = '';
    let previousPageLink = '';
    paginationLinksList.map( (link) => {
        if ( link.includes('rel="next"') ) {
            nextPageLink = link.split('; ')[0].trim().slice(1, -1);
        }else if ( link.includes('rel="prev"') ){
            previousPageLink = link.split('; ')[0].trim().slice(1, -1);
        }
        return link;
    })

    return {
        type: actionTypes.UPDATE_PAGINATION_STATE,
        payload: {
            nextPageLink,
            previousPageLink
        }
    }
}

export {
    addMerchant,
    deleteMerchant,
    getMerchantList,
    updateMerchant,
};