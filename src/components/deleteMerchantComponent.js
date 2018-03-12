import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Confirm } from 'react-confirm-bootstrap';

/**
 * This component will render the Delete merchant button and delete confirmation popup
 */
class DeleteMerchantComponent extends Component{

    render(){
        const { id, deleteMerchant } = this.props;

        return (
            <Confirm
                onConfirm={() => deleteMerchant(id)}
                body="Are you sure you want to delete this merchant ?"
                confirmText="Delete"
                title="Delete Merchant">
                <Button bsStyle="danger" bsSize="xsmall" className="mdBtn">{'Delete'}</Button>
            </Confirm>
        )

    }
}

export default DeleteMerchantComponent;