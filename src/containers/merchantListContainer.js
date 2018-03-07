import React, { Component } from 'react';
import { connect } from 'react-redux';

import MerchantListComponent from '../components/merchantListComponent';
import { getMerchantList } from '../actions/merchantActions';

const mapStateToProps = (state, nextProps) => ({
   merchantList: state.merchantReducer.merchantList
});

const mapDispatchToProps = (dispatch) => ({
    getMerchantList: () => {
        dispatch( getMerchantList() )
    }
});

class MerchantListContainer extends Component{

    componentWillMount(){
        this.props.getMerchantList();
    }

    render(){

        const { merchantList } = this.props;

        return (
            <MerchantListComponent merchantList={merchantList} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MerchantListContainer)