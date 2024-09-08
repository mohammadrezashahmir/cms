import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ConfirmationModal({ show, onHide, onConfirm, message="آیا از حذف این آیتم مطمئنید؟", confirmText = "بله", cancelText = "لغو" }) {
    return (
        <Modal centered show={show} onHide={onHide}>
            <Modal.Body className='text-lg font-medium'>{message}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    {cancelText}
                </Button>
                <Button variant="danger" onClick={onConfirm}>
                    {confirmText}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmationModal;
