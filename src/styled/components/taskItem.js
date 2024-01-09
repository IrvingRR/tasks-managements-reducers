import styled, {css} from 'styled-components';


export const TasksListItem = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const TasksListItemHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

export const TasksListItemHeaderInfo = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 5px;

    h3, p {
        font-size: var(--fs-sm);
        font-weight: normal;
    }

    p {
        color: ${props => props.theme.fontGrayColor};
    }

    .task-pinned-icon {
        color: var(--primary-color);
        font-size: var(--fs-lg);
        margin-left: -25px;
    }
`;

export const TaskContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-left: 5px;
`;

export const TasksListItemButton = styled.button`
    color: ${props => props.theme.fontGrayColor};
    height: 20px;
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    
    &:hover {

        svg {
            color: ${props => props.theme.fontColor};
        }
    }
    
    svg {
        font-size: var(--fs-lg);
        transition: var(--transition);
    }
`;

export const TaskOptions = styled.ul`
    width: 150px;
    position: absolute;
    right: 0;
    top: 30px;
    background-color: ${props => props.theme.grayColor};
    overflow: hidden;
    border-radius: var(--radius);
    transform: translateY(-10px);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    z-index: 99;

    ${props => props.active && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    `}
`;

export const TaskOption = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 20px;
    color: ${props => props.theme.fontColor};
    transition: var(--transition);
    cursor: pointer;
    font-size: var(--fs-sm);
    
    &:hover {
        background-color: var(--primary-color);
        color: ${props => props.theme.fontColor};
    }
    
    svg {
        font-size: var(--fs-md);
    }
`;