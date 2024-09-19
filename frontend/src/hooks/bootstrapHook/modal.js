import React, {useState} from 'react';

const useModal = () => {
    const [showModal, setShowModal] = useState(false);
    const [modalParam, setModalParam] = useState({});

    return (
        {
            showModal, setShowModal,
            modalParam, setModalParam,
        }
    );
};

export default useModal;