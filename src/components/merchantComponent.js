import React, { Component } from 'react';

class MerchantComponent extends Component{
    render(){
        const {id, firstname, lastname, avatarUrl, email, phone, hasPremium, bidsModalComponent} = this.props;

        return (
            <div className="singleMerchantContainer row">
                <div className="col-md-5">
                    <img src={avatarUrl} alt="Avatar URL"/>
                </div>
                <div className="col-md-7">
                    Name : {firstname} {lastname} <br/>
                    Email : {email} <br/>
                    Phone : {phone} <br/>
                    Premium : {hasPremium ? 'Yes': 'No'}
                    {bidsModalComponent}
                </div>
            </div>
        )

    }
}

export default MerchantComponent