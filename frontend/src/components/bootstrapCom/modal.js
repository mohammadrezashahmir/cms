import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CustomModal = ({modalSet, handleConfirm, show, setShow}) => {
    const handleClose = () => setShow(false);
    const {title, content, confirmTitle = 'ذخیره',confirmColor} = modalSet
    return (
        <div className='box'>
            <Modal show={show} onHide={handleClose} centered={true}>
                <Modal.Header closeButton>
                    <Modal.Title className='text-2xl font-medium leading-none mt-3'>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{content}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        لغو
                    </Button>
                    <Button variant={confirmColor} onClick={() => {
                        handleConfirm()
                        setShow(false);
                    }}>
                        {confirmTitle}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CustomModal;