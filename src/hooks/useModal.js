import { useState } from "react";

export const useModal = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => setIsOpenModal(true);

    const closeModal = () => setIsOpenModal(false);

    const toggleModal = () => setIsOpenModal(!openModal);

    return {
        isOpenModal,
        openModal,
        closeModal,
        toggleModal
    }
};