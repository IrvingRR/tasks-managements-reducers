import { ACTIONS } from "../actions/tasksActions";

export const tasksInitialState = {
    tasks: [],
    newTask: '',
    memo: '',
    selectedTask: {}
};

export const tasksInit = (tasksInitialState) => {
    const tasksLocalStorage = JSON.parse(localStorage.getItem('tasks'));
    
    return {
        ...tasksInitialState,
        tasks: tasksLocalStorage
    };
};

export const tasksReducer = (state, action) => {
    switch (action.type) {
        
        case ACTIONS.SET_NEW_TASK: 
            return {...state, newTask: action.payload};

        case ACTIONS.SET_MEMO: 
            return {...state, memo: action.payload};

        case ACTIONS.ADD_TASK: {
            return { ...state, tasks: [...state.tasks, action.payload] };
        }

        case ACTIONS.COMPLETE_TASK: {
            const tasks = state.tasks.map(item => {
                if(item.task === action.payload.task) {
                    return { ...item, isCompleted: !item.isCompleted };
                }
                return item;
            });

            return {...state, tasks};
        }

        case ACTIONS.PIN_ON_THE_TOP_TASK: {
            const tasks = state.tasks.map(item => {
                if(item.task === action.payload.task) {
                    return { ...item, isPinned: !item.isPinned };
                }
                return item;
            });

            return {...state, tasks};
        }

        case ACTIONS.ADD_MEMO: {
            const tasks = state.tasks.map(item => {
                if(item.task === action.payload.task) {
                    return action.payload
                }

                return item;
            });

            return {...state, tasks};
        }

        case ACTIONS.DELETE_TASK: {
            const tasks = state.tasks.filter(item => item.task !== action.payload.task);
            return { ...state, tasks };
        }

        case ACTIONS.SET_SELECTED_TASK: 
            return { ...state, selectedTask: action.payload }
    
        default:
            return state;
    }
};