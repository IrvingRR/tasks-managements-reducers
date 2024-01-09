/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { BiSave } from "react-icons/bi";
import { Actions, Container } from "../../styled/components/modals/addMemoModal";
import { Button, Textarea } from "../common";
import { Modal } from "./Modal";
import { TasksContext } from "../../contexts/tasksContext";

export const AddMemoModal = ({ isOpenModal, closeModal }) => {

  const { handleAddMemo, handleSetMemo, memo, selectedTask } = useContext(TasksContext);

  const handleAddMemoTask = () => {
    const taskEdited = {...selectedTask, memo};
    handleAddMemo(taskEdited);
    closeModal();
    handleSetMemo('');
  };

  return (
    <Modal isOpenModal={isOpenModal} closeModal={closeModal}>
        <Container>
            <h2>{selectedTask.memo ? 'Edit memo' : 'Add memo'}</h2>
            <Textarea name='memo' placeholder='Write your memo here...' value={memo} onChange={(e) => handleSetMemo(e.target.value)}/>
            <Actions>
                <Button label='Cancel' variant='themed' onClick={closeModal} type='button'/>
                <Button label='Save' icon={<BiSave/>} disabled={memo === ''} onClick={handleAddMemoTask} type='button'/>
            </Actions>
        </Container>
    </Modal>
  )
}
