import React, { Component } from 'react';

class MerchantComponent extends Component{
    render(){
        const {id, firstname, lastname, avatarUrl, email, phone, hasPremium, bids} = this.props;

        return (
            <div className="singleMerchantContainer row">
                <div className="col-md-3">
                    <img src={avatarUrl} alt="Avatar URL"/>
                </div>
                <div className="col-md-9">
                    Name : {firstname} {lastname} <br/>
                    Email : {email} <br/>
                    Phone : {phone} <br/>
                    Premium : {hasPremium ? 'Yes': 'No'}
                </div>
            </div>
        )

    }
}

export default MerchantComponent