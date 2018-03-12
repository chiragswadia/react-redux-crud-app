import React, { Component } from 'react';

import MerchantComponent from './merchantComponent';
import BidsModalComponent from './bidsModalComponent';
import DeleteMerchantComponent from './deleteMerchantComponent';
import AddUpdateMerchantContainer from '../containers/addUpdateMerchantContainer';

/**
 * This component will render the list of merchants
 */
class MerchantListComponent extends Component{
    render(){

        const { merchantList, deleteMerchant } = this.props;

        return (
            <div className="merchantListComponent container">
                <div className="row">
                    {merchantList.map( (merchant) => 
                        <MerchantComponent
                            key={'merchant-'+merchant.id}
                            id={merchant.id}
                            firstname={merchant.firstname}
                            lastname={merchant.lastname}
                            avatarUrl={merchant.avatarUrl}
                            email={merchant.email}
                            phone={merchant.phone}
                            hasPremium={merchant.hasPremium}
                            bidsModalComponent={
                                <BidsModalComponent 
                                    key={'bids-' + merchant.id}
                                    bids={merchant.bids}
                                />}
                            deleteMerchantComponent={
                                <DeleteMerchantComponent
                                    key={'delete-' + merchant.id}
                                    id={merchant.id}
                                    deleteMerchant={() => deleteMerchant(merchant.id)}
                                />}
                            updateMerchantComponent={
                                <AddUpdateMerchantContainer key={'edit-' + merchant.id} isEditMode={true} initialValues={merchant} />
                            }
                        />
                    )}

                    {!merchantList.length &&
                        <div className="noMerchants container">No Merchants Found <br/> <br/>
                        <i>Please check whether json-server is running at localhost:3001 before running this app</i>
                        </div>
                    }

                </div>
            </div>

        );

    }
}

export default MerchantListComponent