import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 450px;
    border-radius: var(--radius);
    background-color: ${props => props.theme.backgroundColor};
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h2 {
        font-size: var(--fs-lg);
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-end;
`;