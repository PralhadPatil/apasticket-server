import React from "react";
import { Modal, Button } from "react-bootstrap";
import FlowContent from './flowcontent';

export default class Flow extends React.Component {
    state = {
        visibleScreen : 1
    };

    nextScreenHandler = () =>{
        this.setState({
            visibleScreen : this.state.visibleScreen + 1
        });
    }

    previousScreenHandler = () => {
        this.setState({
            visibleScreen : this.state.visibleScreen -1 
        });
    }

    closeHandler = () => {
        this.props.closeHandler();
        this.setState({
            visibleScreen : 1
        });
    }

    render() {
        return (
            <div>
                <Modal show={this.props.visible} onHide={this.closeHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title>Book Tickets</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={styles.container}>
                        <FlowContent currentScreen={this.state.visibleScreen} closeHandler={this.closeHandler}></FlowContent>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeHandler} bsStyle="danger">Cancel</Button>
                        <Button onClick={this.previousScreenHandler}>Back</Button>
                        <Button onClick={this.nextScreenHandler} bsStyle="primary">Next</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

let styles = {
    container: {
        height : "400px"
    }
};
