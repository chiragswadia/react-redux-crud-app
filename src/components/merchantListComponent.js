import React, { Component } from 'react';

import MerchantComponent from './merchantComponent';

class MerchantListComponent extends Component{
    render(){
        const { merchantList } = this.props;

        if( !merchantList.length ){
            return <div>{'No merchants found'}</div>
        }

        return (
            merchantList.merchantList.map( (merchant) => {
                return <MerchantComponent id={merchant.id}
                    firstname={merchant.firstname}
                    lastname={merchant.lastname}
                    avatarUrl={merchant.avatarUrl}
                    email={merchant.email}
                    phone={merchant.phone}
                    hasPremium={merchant.hasPremium}
                    bids={merchant.bids} />    
            })
        );

    }
}

export default MerchantListComponent