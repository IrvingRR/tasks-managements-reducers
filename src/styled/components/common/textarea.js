import styled from "styled-components";

export const TextareaElement = styled.textarea`
    width: 100%;
    height: 150px;
    resize: none;
    background-color: ${props => props.theme.backgroundColorElements};
    color: ${props => props.theme.fontColor};
    border: 1px solid ${props => props.theme.borderColor};
    padding: 10px 20px;
    border-radius: var(--radius);

    &::placeholder {
        color: ${props => props.theme.fontGrayColor};
    }

    &:focus {
        background-color: transparent;
    }
`; 