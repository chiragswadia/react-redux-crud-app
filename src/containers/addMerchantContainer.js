import React, { Component } from 'react';
import { connect } from 'react-redux';
import {reset} from 'redux-form';

import AddMerchantComponent from '../components/addMerchantComponent';
import { addMerchant } from '../actions/merchantActions';

const mapStateToProps = (state, nextProps) => ({
   
});

const mapDispatchToProps = (dispatch) => ({
    handleSubmit: (formData) => {
        formData['bids'] = []; // For new record, bids count will be blank
        formData['hasPremium'] = formData['hasPremium'] === 'Yes' ? true : false; // If user has explicitly selected Yes
        dispatch( addMerchant(formData) );
        dispatch( reset('addmerchant') );
    },

});

class AddMerchantContainer extends Component{

    render(){

        const { handleSubmit, onBlur } = this.props;

        return (
            <AddMerchantComponent onSubmit={handleSubmit} onBlur={onBlur}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMerchantContainer)