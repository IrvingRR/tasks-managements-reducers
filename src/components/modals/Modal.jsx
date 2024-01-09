/* eslint-disable no-unused-vars */
import ReactDom from 'react-dom';
import { CloseButton, ModalContainer, ModalHeader } from '../../styled/components/modals/modal';
import { BiX } from 'react-icons/bi';

export const Modal = ({ children, isOpenModal, closeModal }) => {
  return ReactDom.createPortal (
    <ModalContainer active={isOpenModal}>
        <ModalHeader>
            <CloseButton onClick={closeModal}>
                <BiX/>
            </CloseButton>
        </ModalHeader>
        {children}
    </ModalContainer>,
    document.getElementById('modal-portal')
  )
}
