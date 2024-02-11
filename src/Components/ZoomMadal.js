import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const ZoomMadal = ({setShow,...props}) => {
    return (
        <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body content</Modal.Body>
        </Modal>
    )
}

export default ZoomMadal