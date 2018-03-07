import React, { Component } from 'react';

import MerchantComponent from './merchantComponent';

class MerchantListComponent extends Component{
    render(){

        const { merchantList } = this.props;

        return (
            <div>
                {merchantList.map( (merchant) => 
                    <MerchantComponent
                        key={merchant.id}
                        id={merchant.id}
                        firstname={merchant.firstname}
                        lastname={merchant.lastname}
                        avatarUrl={merchant.avatarUrl}
                        email={merchant.email}
                        phone={merchant.phone}
                        hasPremium={merchant.hasPremium}
                        bids={merchant.bids}
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