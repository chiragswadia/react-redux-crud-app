import React, { Component } from 'react';

/**
 * This component will render a single merchant card with related details and actions
 */
class MerchantComponent extends Component{
    render(){
        const { firstname, lastname, avatarUrl, email, phone, hasPremium, bidsModalComponent, deleteMerchantComponent, updateMerchantComponent} = this.props;

        return (
            <div className="card col-md-5">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-3">
						<div className="preview-pic tab-content">
						  <img src={avatarUrl} alt={"Merchant Avatar"}/>
						</div>
					</div>
					<div className="details col-md-9">
						<h3 className="merchant-name">{firstname} {lastname}</h3> {bidsModalComponent}
						<h4 className="premium">Premium : <span>{hasPremium ? 'Yes': 'No'}</span></h4>
                        <h5 className="merchant-params">Email:
							<span className="merchant-param">{email}</span>
						</h5>
                        <h5 className="merchant-params">Phone Number:
							<span className="merchant-param">{phone}</span>
						</h5>
						<div className="action">
                            {updateMerchantComponent} {deleteMerchantComponent}
						</div>
					</div>
				</div>
			</div>
		</div>
        )

    }
}

export default MerchantComponent