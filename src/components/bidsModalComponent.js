import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class BidsModalComponent extends Component{

    constructor(props, context){
        super(props, context);

        this.state = {
            show: false
        }
    }

    handleShow(){
        this.setState({show: true})
    }

    handleClose(){
        this.setState({show: false})
    }

    render(){
        const { bids } = this.props;

        return (

            <div>
                {bids.length > 0 &&
                <Button bsStyle="success" bsSize="xsmall" className="mdBtn" onClick={() => this.handleShow()}>{'Show Bids'}</Button>}

                {this.state.show &&
                    <Modal className="modal-container bidsModal" 
                        show={this.state.show} 
                        animation={true}
                        onHide={() => this.handleClose() }
                        >

                        <Modal.Header closeButton>
                            <Modal.Title>{'List of Bids'}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <div className="bidsModalContainer">
                                <table className="table table-striped">
                                    <thead>
                                        <th>Car</th>
                                        <th>Amount</th>
                                        <th>Created On</th>
                                    </thead>
                                    <tbody>
                                        {bids.map( (bid) => 
                                            <tr key={bid.id}>
                                                <td>{bid.carTitle}</td>
                                                <td>{bid.amount}</td>
                                                <td>{bid.created}</td>
                                            </tr>        
                                        )}
                                    </tbody>
                                </table>          
                            </div>
                        </Modal.Body>
                                
                    </Modal>
                }
            </div>
        );

    }
}

export default BidsModalComponent