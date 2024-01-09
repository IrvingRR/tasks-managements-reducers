import styled, {css} from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 37px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    ${props => props.type === 'checkbox' && css`
        width: auto;
        height: auto;
    `}
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;

    svg {
        position: absolute;
        left: 10px;
        font-size: var(--fs-lg);
        color: ${props => props.theme.grayColor};
    }
`;

export const InputElement = styled.input`
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
    background-color: ${props => props.theme.backgroundColorElements};
    color: ${props => props.theme.fontColor};
    padding: 10px 20px;
    border: 1px solid ${props => props.theme.borderColor};
    font-size: var(--fs-sm);

    &::placeholder {
        color: ${props => props.theme.fotGrayColor};
    }

    &:focus {
        background-color: transparent;

        & ~ svg {
            color: ${props => props.theme.fontColor};
        }
    }

    ${props => props.showFilterButton && css`
        padding: 10px 20px 10px 35px;
    `}

    ${props => props.icon && css`
        padding: 10px 20px 10px 30px;
    `}
`;

export const FilterButton = styled.button`
    width: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.fotGrayColor};
    position: absolute;
    left: 0;
    background-color: transparent;
    
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

export const FilterList = styled.ul`
    width: 100%;
    max-width: 200px;
    position: absolute;
    left: 0;
    top: 45px;
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

export const FilterItem = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    color: ${props => props.theme.fontGrayColor};
    transition: var(--transition);
    cursor: pointer;
    font-size: var(--fs-sm);
    
    &:hover {
        background-color: var(--primary-color);
        color: ${props => props.theme.fontColor};
    }
`;

export const Legend = styled.p`
    padding: 10px 20px;
    font-size: var(--fs-md);
`;