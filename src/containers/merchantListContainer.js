import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddMerchantContainer from './addMerchantContainer';
import MerchantListComponent from '../components/merchantListComponent';
import { getMerchantList, deleteMerchant } from '../actions/merchantActions';

const mapStateToProps = (state, nextProps) => ({
   merchantList: state.merchantReducer.merchantList
});

const mapDispatchToProps = (dispatch) => ({
    getMerchantList: () => {
        dispatch( getMerchantList() );
    },

    deleteMerchant: (id) => {
        dispatch( deleteMerchant(id) )
    }
});

class MerchantListContainer extends Component{

    componentWillMount = () => {
        this.props.getMerchantList();
    }

    render = () => {

        const { merchantList, deleteMerchant } = this.props;

        return (
            <div>
                <AddMerchantContainer isEditMode={false} initialValues={{}} />
                <MerchantListComponent merchantList={merchantList} deleteMerchant={deleteMerchant} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MerchantListContainer)