import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';

class ModalForm extends Component {
    constructor(props){
        super(props);

        
    }
   
    render(){
        return(
            <Modal>
                <Modal.Header closeButton>
                    <Modal.Title>Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>Hi I see you </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger">Cancel</Button>
                </Modal.Footer>

            </Modal>
    )}
}
    
export default ModalForm;