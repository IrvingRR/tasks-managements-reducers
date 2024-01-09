import styled from 'styled-components';

export const TasksListContainer = styled.ul`
    width: 100%;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const PinnedTasks = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-bottom: 1px solid ${props => props.theme.borderColor};
    padding-bottom: 15px;
`;

export const CommonTasks = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const LegendNoData = styled.p`
    text-align: center;
    font-size: var(--fs-sm);
`;