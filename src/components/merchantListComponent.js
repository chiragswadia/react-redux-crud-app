import React, { Component } from 'react';

import MerchantComponent from './merchantComponent';
import BidsModalComponent from './bidsModalComponent';
import DeleteMerchantComponent from './deleteMerchantComponent';
import AddMerchantContainer from '../containers/addMerchantContainer';

class MerchantListComponent extends Component{
    render(){

        const { merchantList, deleteMerchant } = this.props;

        return (
            <div>
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
                            <AddMerchantContainer key={'edit-' + merchant.id} isEditMode={true} merchantInfo={merchant} />
                        }
                    />
                )}

                {/* {!merchantList.length &&
                     #TODO <div>No Merchants Found</div>
                } */}

            </div>

        );

    }
}

export default MerchantListComponent