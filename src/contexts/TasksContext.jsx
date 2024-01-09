/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { tasksInit, tasksInitialState, tasksReducer } from "../reducers/tasksReducer";
import { ACTIONS } from "../actions/tasksActions";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {

    const [state, dispatch] = useReducer(tasksReducer, tasksInitialState, tasksInit);

    const handleSetNewTask = (newTaskValue) => {
        dispatch({
            type: ACTIONS.SET_NEW_TASK,
            payload: newTaskValue
        });
    };

    const handleSetMemo = (memo) => {
        dispatch({
            type: ACTIONS.SET_MEMO,
            payload: memo
        });
    };

    const handleAddNewTask = (newTask) => {
        const newTaskObject = { task: newTask, memo: '', isPinned: false, isCompleted: false }

        dispatch({
            type: ACTIONS.ADD_TASK,
            payload: newTaskObject
        });
    };

    const handleCompleteTask = (task) => {
        dispatch({
            type: ACTIONS.COMPLETE_TASK,
            payload: task
        });
    };

    const handlePinOnTheTop = (task) => {
        dispatch({
            type: ACTIONS.PIN_ON_THE_TOP_TASK,
            payload: task
        });
    };

    const handleAddMemo = (taskEdited) => {
        dispatch({
            type: ACTIONS.ADD_MEMO,
            payload: taskEdited
        });
    };

    const handleDeleteTask = (task) => {
        dispatch({
            type: ACTIONS.DELETE_TASK,
            payload: task
        })
    };

    const handleSetSelectedTask = (task) => {
        dispatch({
            type: ACTIONS.SET_SELECTED_TASK,
            payload: task
        });
    };

    const tasksContextValue = {
        tasks: state.tasks,
        newTask: state.newTask,
        memo: state.memo,
        selectedTask: state.selectedTask,
        handleSetNewTask,
        handleSetMemo,
        handleAddNewTask,
        handleCompleteTask,
        handlePinOnTheTop,
        handleAddMemo,
        handleDeleteTask,
        handleSetSelectedTask
    };

    return (
        <TasksContext.Provider value={tasksContextValue}>
            {children}
        </TasksContext.Provider>
    )
}
