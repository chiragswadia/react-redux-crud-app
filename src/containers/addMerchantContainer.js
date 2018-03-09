import React, { Component } from 'react';
import { connect } from 'react-redux';
import {reset} from 'redux-form';

import AddMerchantComponent from '../components/addMerchantComponent';
import { addMerchant } from '../actions/merchantActions';

const mapStateToProps = (state, nextProps) => ({
   
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleSubmit: (formData) => {
        
        formData['hasPremium'] = (formData['hasPremium'] === 'Yes') ? true : false; // If user has explicitly selected Yes
        
        if( ownProps.isEditMode ){
            
        }else{
            formData['bids'] = []; // For new record, bids count will be blank
            dispatch( addMerchant(formData) );
            dispatch( reset('addmerchant') );
        }
        
    },

});

class AddMerchantContainer extends Component{

    render(){

        const { handleSubmit, isEditMode=false, merchantInfo={} } = this.props;

        return (
            <AddMerchantComponent onSubmit={handleSubmit} isEditMode={isEditMode} merchantInfo={merchantInfo} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMerchantContainer)