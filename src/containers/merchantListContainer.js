import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddUpdateMerchantContainer from '../containers/addUpdateMerchantContainer';
import MerchantListComponent from '../components/merchantListComponent';
import { getMerchantList, deleteMerchant } from '../actions/merchantActions';
import { Pager } from 'react-bootstrap';

const mapStateToProps = (state, nextProps) => ({
   merchantList: state.merchantReducer.merchantList,
   nextPageLink: state.merchantReducer.nextPageLink,
   previousPageLink: state.merchantReducer.previousPageLink
});

const mapDispatchToProps = (dispatch) => ({
    getMerchantList: (pageLink='') => {
        dispatch( getMerchantList(pageLink) );
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

        const { merchantList, deleteMerchant, getMerchantList, previousPageLink, nextPageLink } = this.props;

        return (
            <div className="merchantListContainer container">
                <AddUpdateMerchantContainer isEditMode={false} initialValues={{}} />
                <MerchantListComponent merchantList={merchantList} deleteMerchant={deleteMerchant} />

                <Pager>
                    {previousPageLink &&
                        <Pager.Item previous onClick={() => getMerchantList(previousPageLink)}>
                            &larr; Previous Page
                        </Pager.Item>
                    }

                    {nextPageLink &&
                        <Pager.Item next onClick={() => getMerchantList(nextPageLink)}>
                            Next Page &rarr;
                        </Pager.Item>
                    }
                </Pager>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MerchantListContainer)