import styled, {css} from 'styled-components';

export const ButtonElement = styled.button`
    padding: 8px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background-color: var(--primary-color);
    color: var(--white-color);
    border-radius: var(--radius);
    font-size: var(--fs-sm);

    svg {
        font-size: var(--fs-md);
    }

    &:hover {
        background-color: var(--primary-color-hover);
    }

    &:active {
        background-color: var(--primary-color);
    }

    &:disabled {
        background-color: var(--primary-color-disabled);
        border-color: transparent;
        color: var(--white-color);
        cursor: not-allowed;
    }

    ${props => props.variant === 'outlined' && css`
        border-color: var(--primary-color);
        background-color: transparent;
        color: var(--primary-color);

        &:hover {
            color: var(--white-color);
        }
    `}

    ${props => props.variant === 'themed' && css`
        background-color: ${props => props.theme.backgroundColorElements};
        color: var(--white-color);

        &:hover {
            color: var(--white-color);
        }
    `}

    ${props => props.variant === 'themed-outlined' && css`
        border-color: ${props => props.theme.backgroundColorElements};
        background-color: transparent;

        &:hover {
            color: var(--white-color);
            background-color: ${props => props.theme.backgroundColorElements};
        }
    `}

    ${props => props.variant === 'transparent' && css`
        background-color: transparent;

        &:hover {
            color: ${props => props.theme.fontColor};
        }
    `}
`;