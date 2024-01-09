import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    /* Variables */
    :root {
        --primary-color: #ca6b8e;
        --primary-color-hover: #e65d8b;
        --primary-color-disabled: #d291a9;
        --white-color: #fff;

        --font: 'Poppins', 'sans-serif';
        --fs-xl: 1.87rem; // 30px
        --fs-lg: 1.25rem; // 20px
        --fs-md: 0.875rem; // 14px
        --fs-sm: 0.75rem; // 12px
        --fs-xs: 0.625rem; // 10px

        --transition: 0.3s ease;
        --radius: 5px;

    }

    /* Reset Styles */

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: var(--primary-color);
        font-family: var(--font);
        font-size: var(--fs-md);
        color: ${props => props.theme.fontColor};
        min-height: 100vh;
    }

    input,
    button,
    select,
    textarea {
        outline: none;
        border: 1px solid transparent;
        transition: var(--transition);
        font-family: var(--font);
    }

    button { cursor: pointer; }

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
        transition: var(--transition);
    }

`;