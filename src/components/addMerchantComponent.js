import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import SelectList from 'react-widgets/lib/SelectList';
import 'react-widgets/dist/css/react-widgets.css'

class AddMerchantComponent extends Component{

    constructor(props, context){
        super(props, context);

        this.state = {
            show: false
        }
    }

    open(){
        this.setState({show: true})
    }

    close(){
        this.setState({show: false})
    }

    render(){
        const { handleSubmit, isEditMode=false, merchantInfo={} } = this.props;

        // if( this.props.isEditMode && this.state.show ){ // edit mode
        //     this.props.initialize({
        //         firstname: merchantInfo.firstname,
        //         lastname: merchantInfo.lastname,
        //         email: merchantInfo.email,
        //         phone: merchantInfo.phone,
        //         avatarUrl: merchantInfo.avatarUrl,
        //         hasPremium: merchantInfo.hasPremium === true ? 'Yes' : 'No'
        //     });
        // }else{ // add mode
        //     this.props.initialize({});
        // }

        const renderSelectList = ({ input, data }) =>
            <SelectList {...input}
                onBlur={() => input.onBlur()}
                data={data} />

        return (
            <div>
                <Button bsStyle="default" className="mdBtn" onClick={ () => this.open() }>{isEditMode ? 'Update Merchant': 'Add Merchant'}</Button>
                {this.state.show &&
                    <Modal className="modal-container addMerchantModal" 
                        show={this.state.show} 
                        animation={true}
                        >

                        <div className="closeButton">
                            <a onClick={() => this.close()}>Close</a>
                        </div>

                        <Modal.Body>
                            <div className="addMerchantModalContainer">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="firstname">First Name</label>
                                        <Field name="firstname" className="form-control" component="input" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastname">Last Name</label>
                                        <Field name="lastname" className="form-control" component="input" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Field name="email" className="form-control" component="input" type="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <Field name="phone" className="form-control" component="input" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="avatarUrl">Avatar URL</label>
                                        <Field name="avatarUrl" className="form-control" component="input" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="hasPremium">Premium</label>
                                        <Field
                                            name="hasPremium"
                                            component={renderSelectList}
                                            data={[ 'Yes', 'No' ]}
                                            defaultValue={'No'}
                                        />
                                    </div>

                                    <Button type="submit" bsStyle="default" className="mdBtn" >{isEditMode ? 'Update Merchant': 'Add Merchant'}</Button>
                                </form>
                            </div>
                        </Modal.Body>
                    </Modal>
                }
            </div>
        )

    }
}

AddMerchantComponent = reduxForm({
    // a unique name for the form
    form: 'addmerchant'
})(AddMerchantComponent)

export default AddMerchantComponent;