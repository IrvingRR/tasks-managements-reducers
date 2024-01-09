/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { LegendNoData, PinnedTasks, TasksListContainer } from "../styled/components/taskList";
import { TaskItem } from "./TaskItem";
import { AddMemoModal } from "./modals";
import { useModal } from "../hooks";
import { TasksContext } from "../contexts/tasksContext";

export const TasksList = ({ tasks=[] }) => {
    const { handleSetSelectedTask } = useContext(TasksContext);
    const [pinnedTasksList, setPinnedTasksList] = useState([]);
    const [commonTasksList, setCommonTasksList] = useState([]);
    const { isOpenModal, openModal, closeModal } = useModal();

    useEffect(() => {
        const pinnedTasks = tasks.filter(item => item.isPinned);
        setPinnedTasksList(pinnedTasks);

        const commonTasks = tasks.filter(item => !item.isPinned);
        setCommonTasksList(commonTasks);

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleOpenModal = (task) => {
        handleSetSelectedTask(task);
        openModal();
    }

    const handleCloseModal = () => {
        handleSetSelectedTask({});
        closeModal();
    };

    return (
        <>
            <AddMemoModal isOpenModal={isOpenModal} closeModal={handleCloseModal}/>
            <TasksListContainer>
                {pinnedTasksList.length > 0 &&
            <PinnedTasks>
                {pinnedTasksList.map((item, index) => <TaskItem openModal={() => handleOpenModal(item)} key={`${index}-${item.task}`} data={item}/>)}
            </PinnedTasks>
            }

            {commonTasksList.length > 0
                ? commonTasksList.map((item, index) => <TaskItem openModal={() => handleOpenModal(item)} key={`${index}-${item.task}`} data={item}/>)
                : <LegendNoData>No tasks yet</LegendNoData>
            }
            </TasksListContainer>
        </>
    );
};