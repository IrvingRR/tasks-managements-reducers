import styled from 'styled-components';

export const CheckboxContainer = styled.div`
    width: 14px;
    height: 14px;
    min-width: 14px;
    min-height: 14px;
    border: 1px solid ${props => props.theme.borderColor};
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.grayColor};

    .checkbox-icon {
        margin: 0;
    }
`;