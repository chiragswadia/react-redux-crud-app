import React, { Component } from 'react';
import { connect } from 'react-redux';
import {reset} from 'redux-form';

import AddUpdateMerchantComponent from '../components/addUpdateMerchantComponent';
import { addMerchant, updateMerchant } from '../actions/merchantActions';

const mapStateToProps = (state, nextProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    handleSubmit: (formData) => {
        
        // Transform hasPremium key from string to boolean
        formData['hasPremium'] = (formData['hasPremium'] === 'Yes') ? true : false;
        
        if( ownProps.isEditMode ){
            dispatch( updateMerchant(formData) );
        }else{
            formData['bids'] = []; // For new record, bids count will be blank
            formData['timestamp'] = Math.round(+new Date()/1000);
            dispatch( addMerchant(formData) );
            dispatch( reset('addupdatemerchant') ); // clear form
        }
        
    },

});

/**
 * This container component handles state management / actions for AddUpdateMerchantComponent
 */
class AddUpdateMerchantContainer extends Component{

    render(){

        const { handleSubmit, isEditMode=false, initialValues } = this.props;
        
        return (
            <AddUpdateMerchantComponent initialValues={initialValues} onSubmit={handleSubmit} isEditMode={isEditMode} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUpdateMerchantContainer)