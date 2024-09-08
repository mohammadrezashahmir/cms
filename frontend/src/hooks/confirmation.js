import { useState } from 'react';

function useConfirmationModal(onConfirmAction) {
    const [showModal, setShowModal] = useState(false);
    const [itemId, setItemId] = useState(null);

    const handleShowModal = (id) => {
        setItemId(id);
        setShowModal(true);
    };

    const handleConfirm = () => {
        if (itemId && onConfirmAction) {
            onConfirmAction(itemId);
        }
        setShowModal(false);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return {
        showModal,
        handleShowModal,
        handleConfirm,
        handleCloseModal,
    };
}

export default useConfirmationModal;
