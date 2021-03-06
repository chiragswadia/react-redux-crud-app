import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Field, reduxForm, initialize } from 'redux-form';
import SelectList from 'react-widgets/lib/SelectList';
import 'react-widgets/dist/css/react-widgets.css'

/**
 * This component is used for rendering the form for Add/Update merchant
 */
class AddUpdateMerchantComponent extends Component{

    constructor(props, context){
        super(props, context);

        this.state = {
            show: false
        }
    }

    handleShow(){
        // Show modal popup
        this.setState({show: true})

        if( this.props.isEditMode ){
            // transform value of hasPremium from boolean to Yes/No
            this.props.initialValues['hasPremium'] = this.props.initialValues['hasPremium'] ? 'Yes' : 'No';  
        }

        // Initialize  the form again with new values
        this.props.dispatch(initialize('addupdatemerchant', this.props.initialValues)) // set form values
    }

    handleClose(){
        // Hide modal popup
        this.setState({show: false})
    }

    handleSubmit(formData){
        this.props.handleSubmit(formData);
        // Hide modal popup after form submission
        this.setState({show: false});
    }

    render(){
        const { isEditMode=false } = this.props;
        
        const renderSelectList = ({ input, data }) =>
            <SelectList {...input}
                onBlur={() => input.onBlur()}
                data={data} />

        return (
            <div>
                <Button bsStyle="primary" bsSize={isEditMode ? 'xsmall' : 'sm'} className="mdBtn add" onClick={() => this.handleShow()}>{isEditMode ? 'Update Merchant': 'Add Merchant +'}</Button>
                {this.state.show &&
                    <Modal className="modal-container addMerchantModal" 
                        show={this.state.show} 
                        animation={true}
                        onHide={() => this.handleClose()}
                        >

                        <Modal.Header closeButton>
                            <Modal.Title>{isEditMode ? 'Update Merchant' : 'Add Merchant'}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <div className="addMerchantModalContainer">
                                <form onSubmit={() => this.handleSubmit()}>

                                    {isEditMode &&
                                    <Field name="id" className="form-control" component="input" type="hidden" />}

                                    <div className="form-group">
                                        <label htmlFor="firstname">First Name</label>
                                        <Field required name="firstname" className="form-control" component="input" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastname">Last Name</label>
                                        <Field required name="lastname" className="form-control" component="input" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Field required name="email" className="form-control" component="input" type="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <Field required name="phone" className="form-control" component="input" type="number" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="avatarUrl">Avatar URL</label>
                                        <Field required name="avatarUrl" className="form-control" component="input" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="hasPremium">Premium</label>
                                        <Field
                                            name="hasPremium"
                                            component={renderSelectList}
                                            data={[ 'Yes', 'No' ]}
                                        />
                                    </div>

                                    <Button type="submit" bsStyle="primary" className="mdBtn" >{isEditMode ? 'Update Merchant': 'Add Merchant'}</Button>
                                </form>
                            </div>
                        </Modal.Body>
                    </Modal>
                }
            </div>
        )

    }
}

// Initialize redux form
AddUpdateMerchantComponent = reduxForm({
    form: 'addupdatemerchant'
})(AddUpdateMerchantComponent)

export default AddUpdateMerchantComponent;