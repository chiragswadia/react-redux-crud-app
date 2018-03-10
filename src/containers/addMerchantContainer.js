import React, { Component } from 'react';
import { connect } from 'react-redux';
import {reset} from 'redux-form';

import AddMerchantComponent from '../components/addMerchantComponent';
import { addMerchant, updateMerchant } from '../actions/merchantActions';

const mapStateToProps = (state, nextProps) => ({
   
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleSubmit: (formData) => {
        
        formData['hasPremium'] = (formData['hasPremium'] === 'Yes') ? true : false; // If user has explicitly selected Yes
        
        if( ownProps.isEditMode ){
            dispatch( updateMerchant(formData) );
        }else{
            formData['bids'] = []; // For new record, bids count will be blank
            dispatch( addMerchant(formData) );
            dispatch( reset('addmerchant') );
        }
        
    },

});

class AddMerchantContainer extends Component{

    render(){

        const { handleSubmit, isEditMode=false, initialValues } = this.props;
        
        return (
            <AddMerchantComponent initialValues={initialValues} onSubmit={handleSubmit} isEditMode={isEditMode} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMerchantContainer)