import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class BidsModalComponent extends Component{

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
        const { bids } = this.props;

        return (

            <div>
                <Button bsStyle="default" className="mdBtn" onClick={() => this.open()}>{'Show Bids'}</Button>

                {this.state.show &&
                    <Modal className="modal-container bidsModal" 
                        show={this.state.show} 
                        animation={true}
                        >

                        <div className="closeButton">
                            <a onClick={() => this.close()}>Close</a>
                        </div>

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