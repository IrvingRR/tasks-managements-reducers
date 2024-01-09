import styled, {css} from "styled-components";

export const ModalContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.backgroundColorElements};
    padding: 20px;
    transform: translateY(-20px);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    z-index: 9999;

    ${props => props.active && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    `}
`;

export const ModalHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    padding: 20px;
`;

export const CloseButton = styled.button`
    background-color: transparent;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.fontColor};
    font-size: var(--fs-xl);
`;