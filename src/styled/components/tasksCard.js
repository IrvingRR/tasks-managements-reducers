import styled, {css} from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

export const Card = styled.div`
    width: 100%;
    max-width: 450px;
    border-radius: var(--radius);
    background-color: ${props => props.theme.backgroundColor};
`;

export const CardHeader = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: center;
    border-bottom: 2px solid ${props => props.theme.borderColor};
`;

export const CardHeaderAction = styled.button`
    padding: 10px 20px;
    height: 100%;
    background-color: transparent;
    color: ${props => props.theme.grayColor};
    border-bottom: 2px solid transparent;
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;

    &:hover {
        color: ${props => props.theme.fontColor};
        border-bottom-color: var(--primary-color);
    }

    ${props => props.active && css`
        color: ${props => props.theme.fontColor};
        border-bottom-color: var(--primary-color);
    ` }
`;

export const CardBody = styled.form`
    width: 100%;
    padding: 30px 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Title = styled.h2`
    font-size: var(--fs-lg);
    text-align: center;
    font-weight: 500;
    padding: 20px 0;
`;