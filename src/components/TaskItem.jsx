/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { BiPin, BiDotsHorizontalRounded, BiNote, BiTrashAlt  } from "react-icons/bi";
import { TaskContent, TaskOption, TaskOptions, TasksListItem, TasksListItemButton, TasksListItemHeader, TasksListItemHeaderInfo } from "../styled/components/taskItem";
import { Checkbox } from "./common";
import { TasksContext } from "../contexts/tasksContext";

export const TaskItem = ({ data, openModal }) => {
    
    const { handleCompleteTask, handlePinOnTheTop, handleDeleteTask } = useContext(TasksContext);
    const [showOptions, setShowOptions] = useState(false);

    return (
        <TasksListItem>
            <TasksListItemHeader>
                <TasksListItemHeaderInfo>
                    { data?.isPinned && <BiPin className="task-pinned-icon"/> }
                    <Checkbox checked={data.isCompleted} handleClick={() => handleCompleteTask(data)}/>
                    <TaskContent>
                        <h3>{data?.task}</h3>
                        <p>{data?.memo}</p>
                    </TaskContent>
                </TasksListItemHeaderInfo>

                <TasksListItemButton onClick={() => setShowOptions(!showOptions)} type="button">
                    <BiDotsHorizontalRounded/>
                </TasksListItemButton>
                <TaskOptions active={showOptions}>
                    <TaskOption onClick={() => handlePinOnTheTop(data)}>
                        <BiPin/>
                        {data.isPinned ? 'Remove' : 'Pin on the top'} 
                    </TaskOption>
                    <TaskOption onClick={openModal}>
                        <BiNote/>
                        { data.memo ? 'Edit memo' : 'Add a memo' }
                    </TaskOption>
                    <TaskOption onClick={() => handleDeleteTask(data)}>
                        <BiTrashAlt/>
                        Delete
                    </TaskOption>
                </TaskOptions>

            </TasksListItemHeader>
        </TasksListItem>
    );
};